//modal=btn, modal-overlay, close-btn을 선택할 것
// 모달버튼이랑 종료버튼에다 클릭 이벤트 리스너를 추가
// 모달 버튼을 클릭시 모달 오버레이의 .OPEN MODAL을 제거할 것

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
}); 