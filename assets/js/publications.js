/**
 * ─────────────────────────────────────────────
 *  PUBLICATIONS DATA
 *  새 논문 추가: 이 배열에 객체 하나 추가하면 끝.
 *  카드(index)와 상세 페이지(pub/paper.html)가 자동 생성됨.
 * ─────────────────────────────────────────────
 *
 * 필수 필드:
 *   id       — URL 식별자 (영문, 하이픈, 고유해야 함)
 *   title    — 논문 제목
 *   authors  — 저자 (본인 이름은 자동으로 bold 처리됨)
 *   venue    — 학회/저널 이름
 *   year     — 출판 연도
 *
 * 선택 필드:
 *   thumb    — 썸네일 이미지 파일명 (images/thumbs/ 폴더)
 *   tldr     — 한 줄 요약
 *   abstract — 초록
 *   contributions — 핵심 기여 (배열)
 *   links    — 링크 (null이면 버튼 숨김)
 *   bibtex   — BibTeX 문자열
 */

var PUBLICATIONS = [

  /* ── 새 논문 추가 예시 ──────────────────────────
  {
    id: "my-paper",
    title: "My Paper Title",
    authors: "Brandon Minjae Lee, Collaborator Name",
    venue: "NeurIPS",
    year: 2026,
    thumb: "01.jpg",
    tldr: "We propose a novel method for ...",
    abstract: "In this paper, we ...",
    contributions: [
      "We introduce X",
      "We demonstrate Y"
    ],
    links: {
      pdf:    "https://example.com/paper.pdf",
      arxiv:  "https://arxiv.org/abs/XXXX.XXXXX",
      code:   "https://github.com/BrandonLee0626/repo",
      poster: null
    },
    bibtex: `@inproceedings{lee2026paper,
  title     = {My Paper Title},
  author    = {Lee, Brandon Minjae and Collaborator Name},
  booktitle = {NeurIPS},
  year      = {2026}
}`
  }
  ────────────────────────────────────────────── */

];
