# 꼬마법사 홈페이지 — GitHub Pages

빌드 없이 게시할 수 있는 정적 홈페이지입니다. 메뉴별 HTML 페이지로 이동합니다.

## 게시하기
1. GitHub에 `little-mage` 저장소를 만들고 이 폴더의 **내용물**을 main 브랜치에 업로드합니다.
2. 저장소 Settings → Pages → Source에서 **GitHub Actions**를 선택합니다.
3. Actions의 Deploy homepage를 실행하거나 main에 변경사항을 푸시합니다.
4. 배포 작업에 표시되는 주소로 접속합니다.

## 연결할 주소
`assets/config.js`의 studioUrl에 기존 PCYStudio 홈페이지 주소, downloadUrl에 확정된 다운로드 주소를 넣습니다. 빈 값이면 준비 중 안내를 표시하며 외부 이동하지 않습니다.

## 자료 기준
2026-11-08 수정 pcy_update.zip의 게임 에셋과 dungeon_catalog.gd, 최신변경.txt를 참고했습니다. 이미지들은 실제 게임 배포 자료에서 가져왔으며 플레이 스크린샷으로 표시하지 않았습니다. 개별 스킬 이미지와 플레이 스크린샷은 해당 패치 파일에 없어 추가하지 않았습니다. 미구현 기획 내용도 넣지 않았습니다.

## 구성
index / about / magic / adventure / equipment / news / download.html
assets: 게임 이미지, 스타일, 메뉴·원소 선택 기능, 주소 설정
.github/workflows/pages.yml: GitHub Pages 배포

GitHub 계정 및 대상 저장소 연결 전 제작본입니다. 실제 GitHub 게시 완료본은 아닙니다.
