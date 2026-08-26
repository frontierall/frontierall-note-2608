# 공통 참고 자료 (비공개)

여러 PART·프로젝트에서 공통으로 참고하는 PDF를 모아두는 폴더입니다.
메인 페이지·다른 폴더의 링크·루트 `README.md` 어디에도 이 폴더를 연결하지 않습니다.
`index.html`에도 `noindex` 메타태그를 넣어 검색엔진 색인을 막았습니다.
접근하려면 주소를 직접 입력해야 합니다.

- 목록 페이지: `common_docs/index.html`
- 공개 주소: https://frontierall.github.io/frontierall_note_2608/common_docs/

## 폴더 규칙

```
common_docs/<연도>/<프로젝트명>/<파일명>.pdf
```

예: `common_docs/2026/생성형AI프로덕트마스터/커리큘럼.pdf`

## 자료 추가하는 법

1. 위 규칙대로 폴더를 만들고 PDF 파일을 넣습니다.
2. `docs.js`의 `PDF_YEARS` 배열에 연도 → 프로젝트 → 문서 순으로 항목을 추가합니다.
   (파일 상단 주석에 예시가 있습니다.)
3. `common_docs/index.html`을 열어 목록에 잘 나오는지 확인합니다.
