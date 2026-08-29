/* ---------------------------------------------------------------------------
 * 수강생 깃허브 데이터
 *
 * 사람을 추가할 때는 아래 MEMBERS 배열에 객체 하나만 더하면 됩니다.
 * 카드 · 검색 · 개수는 index.html이 알아서 그립니다.
 *
 *   name    화면에 보이는 이름. 공개 페이지이므로 가운데 글자를 O로 가립니다.
 *           (예: 김연재 -> '김O재', 황제 -> '황O')
 *   gh      GitHub 계정 이름(아이디). 프로필 주소와 아바타를 이걸로 만듭니다.
 *   repo    대표 저장소 이름 (없으면 생략). 본인이 특정 저장소를 콕 집어
 *           공유했을 때만 적습니다.
 *   repos   공유 시점에 프로필에 보이던 공개 저장소 개수 (없으면 생략).
 *           지금 값과 다를 수 있어 화면에도 '공유 시점 기준'이라고 적어 둡니다.
 *   note    한 줄 메모 (없으면 생략). 본인이 덧붙인 말을 그대로 적습니다.
 *
 * 순서는 수업 채팅에 공유한 순서 그대로입니다.
 *
 * JSON이 아니라 .js인 이유: JSON + fetch는 파일을 더블클릭해 여는
 * 로컬 환경(file://)에서 CORS로 막힙니다. 이 방식은 로컬과 GitHub Pages
 * 양쪽에서 모두 동작합니다.
 * ------------------------------------------------------------------------- */

/* 이 명단을 모은 날. 저장소 개수는 이 날짜 기준입니다. */
const MEMBERS_UPDATED = '2026-08-29';

const MEMBERS = [
  {
    name: '김O재',
    gh: 'Sylvie0810',
    repos: 4,
    note: 'Private으로 해 둔 것이 많아 공개된 저장소는 적습니다.',
  },
  {
    name: '김O헌',
    gh: 'awesome72',
    repos: 11,
  },
  {
    name: '유O경',
    gh: 'optimy826',
    repo: 'optimy',
    note: '프로필이 아니라 Optimy 저장소를 공유했습니다.',
  },
  {
    name: '김O영',
    gh: 'oreo7630',
    repos: 4,
  },
  {
    name: '김O호',
    gh: 'danielkim5457-dev',
    repos: 3,
  },
  {
    name: '정O빈',
    gh: 'sebeanaire',
    repos: 3,
  },
  {
    name: '나O하',
    gh: 'kumini01',
    repos: 2,
  },
  {
    name: '황O',
    gh: 'emperordesu',
    note: '저장소(Repositories) 탭을 바로 공유했습니다.',
  },
  {
    name: '김O규',
    gh: 'Goodday202007',
    repos: 20,
    note: '프로필 소개: "I\'m studying."',
  },
  {
    name: '김O은',
    gh: 'yekim0928-create',
    repos: 1,
  },
  {
    name: '안O준',
    gh: 'skyluxon',
    repo: 'my-first-app',
    note: '프로필이 아니라 my-first-app 저장소를 공유했습니다.',
  },
  {
    name: '정O영',
    gh: 'AwesomeWY',
    repos: 5,
  },
  {
    name: '배O진',
    gh: 'hey-bernard',
    repos: 6,
    note: '저장소(Repositories) 탭을 바로 공유했습니다.',
  },
  {
    name: '박O경',
    gh: 'aoo111',
    note: '저장소(Repositories) 탭을 바로 공유했습니다.',
  },
  {
    name: '윤O영',
    gh: 'yuriwood50-ai',
  },
  {
    name: '유O경',
    gh: 'sdjoan',
    repos: 11,
    note: '위쪽 optimy826 님과 가린 이름이 같습니다. 계정으로 구분하세요.',
  },
  {
    name: '전O현',
    gh: 'KwangHyeon98',
    note: '프로필 소개: "Medical Imaging AI Engineer · CT · 3D Vision · Deep Learning · PyTorch · VTK"',
  },
  {
    name: '박O진',
    gh: 'aideveloperno1',
  },
  {
    name: '김O아',
    gh: 'kgonggong99-code',
    repos: 1,
  },
];
