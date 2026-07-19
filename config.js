/* ================================================================
   BAY 18기 온보딩 · 제출 설정
   구글폼을 만든 뒤 아래 값을 채우면 모든 주차의 "구글폼으로 제출"
   버튼이 활성화됩니다. (방법은 README.md 참고)
   비워두면 제출 버튼은 자동으로 "복사" 동작으로 대체됩니다.

   - term  : 활동 기간(운영 기수). 배포 단위 고정값 — 다음 학기에 이 값만 변경
   - 가입 기수는 학생이 허브(index.html)에서 한 번 선택하면 자동 입력됩니다.
================================================================ */
window.BAY18_CONFIG = {
  formAction: "https://docs.google.com/forms/d/e/1FAIpQLSdw4ZReKvkSgGnCTGlAXA-40e1CUv5H0GhhzgYCJ_3SAJVawg/viewform",     // 예: "https://docs.google.com/forms/d/e/1FAIpQLxxxx/viewform"
  term: "18기",       // 활동 기간(운영 기수)
  fields: {
    week:   "entry.1278390747",       // 예: "entry.1111111111"  (주차 - 단답형, W1~W6)
    term:   "entry.1523502944",       // 예: "entry.2222222222"  (활동기수 - 단답형, 자동 입력)
    member: "entry.1773345408",       // 예: "entry.3333333333"  (가입기수 - 단답형, 자동 입력)
    name:   "entry.1817164645",       // 예: "entry.4444444444"  (이름 - 단답형)
    output: "entry.921804326"        // 예: "entry.5555555555"  (산출물 - 장문형)
  }
};
