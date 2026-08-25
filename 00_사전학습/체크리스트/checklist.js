/* ---------------------------------------------------------------------------
 * 사전 준비 체크리스트 데이터
 *
 * 항목을 추가할 때는 아래 CHECK_ITEMS 배열에 객체 하나만 더하면 됩니다.
 * 진행률·그룹·개수는 index.html이 알아서 그립니다.
 *
 *   id       체크 상태를 저장하는 열쇠. 한 번 정하면 바꾸지 마세요.
 *            (바꾸면 이미 체크해 둔 수강생의 표시가 풀립니다)
 *   emoji    항목 앞에 붙는 이모지 하나
 *   name     서비스 이름
 *   group    CHECK_GROUPS의 id 중 하나
 *   url      가입/확인하러 가는 주소 (없으면 버튼이 안 나옵니다)
 *   why      왜 필요한지. 1~2줄
 *   tip      가입할 때 알아 두면 좋은 것 (없으면 생략)
 *
 * 체크 상태는 각자 브라우저에만 저장됩니다. 서버로 가지 않으므로
 * 강사가 누가 체크했는지 볼 수는 없습니다.
 * ------------------------------------------------------------------------- */

const CHECK_GROUPS = [
  { id: 'base', label: '가장 먼저', desc: '나머지 가입이 여기에 딸려 옵니다' },
  { id: 'ai',   label: 'AI 도구',  desc: '수업에서 매일 씁니다' },
  { id: 'work', label: '작업 도구', desc: '기록하고, 만든 것을 올리는 곳입니다' },
];

const CHECK_ITEMS = [
  {
    id: 'google',
    emoji: '🔑',
    name: 'Google 계정',
    group: 'base',
    url: 'https://accounts.google.com/',
    why: '아래 서비스 대부분을 구글 계정으로 바로 가입할 수 있습니다. 이것부터 준비하면 나머지가 훨씬 빨라집니다.',
    tip: '이미 Gmail을 쓰고 계시면 그것이 곧 구글 계정입니다. 로그인이 되는지만 확인해 주세요.',
  },
  {
    id: 'chatgpt',
    emoji: '💬',
    name: 'ChatGPT',
    group: 'ai',
    url: 'https://chatgpt.com/',
    why: '가장 널리 쓰이는 AI 대화 도구입니다. 무료 계정으로 시작해도 수업을 따라오는 데 문제없습니다.',
    tip: '"Google로 계속하기"를 누르면 따로 비밀번호를 만들지 않아도 됩니다.',
  },
  {
    id: 'claude',
    emoji: '🧠',
    name: 'Claude',
    group: 'ai',
    url: 'https://claude.ai/new',
    why: '긴 글을 다루고 코드를 만드는 데 강합니다. 바이브코딩 실습에서 자주 등장합니다.',
    tip: '가입 후 대화창이 열리면 준비 완료입니다.',
  },
  {
    id: 'gemini',
    emoji: '✨',
    name: 'Google Gemini',
    group: 'ai',
    url: 'https://gemini.google.com/',
    why: '구글이 만든 AI입니다. 같은 질문을 여러 AI에 던져 답을 비교해 보는 연습을 할 예정이에요.',
    tip: '구글 계정만 있으면 별도 가입 절차 없이 바로 들어갑니다.',
  },
  {
    id: 'notion',
    emoji: '📓',
    name: 'Notion',
    group: 'work',
    url: 'https://www.notion.com/ko',
    why: '수업 메모, 팀 과제, 기획 문서를 정리하는 공간으로 씁니다.',
    tip: '한국어 페이지에서 가입하면 처음부터 한국어로 시작합니다.',
  },
  {
    id: 'github',
    emoji: '🐙',
    name: 'GitHub',
    group: 'work',
    url: 'https://github.com/',
    why: '만든 결과물을 저장하고 인터넷에 공개하는 곳입니다. 지금 보고 계신 이 사이트도 GitHub에 올려 둔 것이에요.',
    tip: '사용자 이름(username)은 주소에 그대로 나오니, 나중에 포트폴리오에 써도 괜찮을 이름으로 정해 주세요.',
  },
];
