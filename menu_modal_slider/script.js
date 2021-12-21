const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle nav
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
  //   (e) => console.log(e.target)
  // 이벤트 타겟이 왜 모달일때 remove하는지 잘 이해가 안됨.
  //왜 모달 바깥쪽 부분이 modal이 되는건지?
  e.target == modal ? modal.classList.remove("show-modal") : false
);
