/* 수강생 요청 - 제작 기록 UI
 *
 * progress.js(공개 기준선) + localStorage(이 브라우저) 를 id 기준 합집합으로 병합한다.
 * 같은 id 는 한 번만 세므로 내보내기 → 커밋 → 새로고침 을 반복해도 개수가 부풀지 않는다.
 */
(function () {
  'use strict';
  var KEY = 'frontierall-note-2608:수강생요청';

  function baseline() {
    return (window.PROGRESS && typeof window.PROGRESS === 'object') ? window.PROGRESS : {};
  }
  function loadLocal() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveLocal(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); return true; }
    catch (e) { return false; }
  }

  var local = loadLocal();

  function merged(key) {
    var seen = {}, out = [];
    (baseline()[key] || []).concat(local[key] || []).forEach(function (r) {
      if (!r || !r.id || seen[r.id]) return;
      seen[r.id] = 1;
      out.push(r);
    });
    out.sort(function (x, y) {
      return String(x.d).localeCompare(String(y.d)) || String(x.id).localeCompare(String(y.id));
    });
    return out;
  }
  function isPinned(key, id) {
    return (baseline()[key] || []).some(function (r) { return r && r.id === id; });
  }
  function today() {
    var d = new Date(), z = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate());
  }
  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  var blocks = Array.prototype.slice.call(document.querySelectorAll('.cluster[data-rec]'));
  if (!blocks.length) return;
  document.getElementById('s-total').textContent = String(blocks.length);

  function renderOne(el) {
    var key = el.getAttribute('data-rec');
    var recs = merged(key);

    var badge = el.querySelector('.made');
    badge.textContent = recs.length ? '제작 ' + recs.length + '건' : '제작 전';
    badge.className = recs.length ? 'made on' : 'made';

    var list = el.querySelector('.rec-list');
    list.innerHTML = recs.map(function (r) {
      return '<li><span class="d">' + esc(r.d) + '</span>' +
        '<span class="m">' + esc(r.m || '(메모 없음)') + '</span>' +
        (isPinned(key, r.id)
          ? '<span class="pinned" title="progress.js에 커밋된 공개 기록">공개</span>'
          : '<button type="button" class="del" data-id="' + esc(r.id) + '" aria-label="기록 삭제">×</button>') +
        '</li>';
    }).join('');
    list.hidden = recs.length === 0;
  }

  function renderSummary() {
    var started = 0, total = 0;
    blocks.forEach(function (el) {
      var n = merged(el.getAttribute('data-rec')).length;
      if (n) started++;
      total += n;
    });
    document.getElementById('s-started').textContent = String(started);
    document.getElementById('s-records').textContent = String(total);
    document.getElementById('s-fill').style.width =
      Math.round(started / blocks.length * 100) + '%';
  }

  function renderAll() { blocks.forEach(renderOne); renderSummary(); }

  blocks.forEach(function (el) {
    var badge = document.createElement('span');
    badge.className = 'made';
    el.querySelector('h4').appendChild(badge);

    var box = document.createElement('div');
    box.className = 'rec';
    box.innerHTML =
      '<ul class="rec-list" hidden></ul>' +
      '<form class="rec-form">' +
        '<input type="text" maxlength="120" placeholder="무엇을 만들었나요? (예: 1차 프로토타입 · 수업 3주차)">' +
        '<button type="submit">+ 1건 기록</button>' +
      '</form>';
    el.appendChild(box);

    box.querySelector('.rec-form').addEventListener('submit', function (ev) {
      ev.preventDefault();
      var key = el.getAttribute('data-rec');
      var input = box.querySelector('input');
      if (!local[key]) local[key] = [];
      local[key].push({
        id: key + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        d: today(),
        m: input.value.trim(),
        title: el.getAttribute('data-title') || ''
      });
      if (!saveLocal(local)) {
        window.alert('이 브라우저가 저장을 막고 있어 기록이 남지 않습니다.');
      }
      input.value = '';
      renderOne(el);
      renderSummary();
    });

    box.querySelector('.rec-list').addEventListener('click', function (ev) {
      var btn = ev.target.closest('.del');
      if (!btn) return;
      var key = el.getAttribute('data-rec'), id = btn.getAttribute('data-id');
      local[key] = (local[key] || []).filter(function (r) { return r.id !== id; });
      saveLocal(local);
      renderOne(el);
      renderSummary();
    });
  });

  document.getElementById('btn-export').addEventListener('click', function () {
    var all = {};
    blocks.forEach(function (el) {
      var key = el.getAttribute('data-rec'), recs = merged(key);
      if (recs.length) all[key] = recs;
    });
    var body = [
      '/* 수강생 요청 - 제작 기록 (공개 기준선)',
      ' * 내보낸 시각: ' + new Date().toLocaleString('ko-KR'),
      ' * 이 파일로 수강생요청/progress.js 를 덮어쓴 뒤 커밋·푸시하세요. */',
      'window.PROGRESS = ' + JSON.stringify(all, null, 2) + ';',
      ''
    ].join('\n');
    var url = URL.createObjectURL(new Blob([body], { type: 'text/javascript;charset=utf-8' }));
    var a = document.createElement('a');
    a.href = url;
    a.download = 'progress.js';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  });

  document.getElementById('btn-reset').addEventListener('click', function () {
    if (!window.confirm('이 브라우저에 저장된 기록을 지웁니다.\nprogress.js 에 커밋된 공개 기록은 그대로 남습니다. 계속할까요?')) return;
    local = {};
    try { localStorage.removeItem(KEY); } catch (e) {}
    renderAll();
  });

  renderAll();
})();
