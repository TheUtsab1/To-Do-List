const input = document.querySelector("input");
const button = document.querySelector(".addTask > button");

button.addEventListener("click", addList);
input.addEventListener("keyup", (e) => {
  e.keyCode === 13 ? addList(e) : null;
});

function addList(e) {
  const pending = document.querySelector(".pending");
  const completed = document.querySelector(".completed");

  const newLi = document.createElement("li");
  const checkBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  checkBtn.innerHTML = '<i class="fa fa-check"></i>';
  deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';

  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";
    pending.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(deleteBtn);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    completed.appendChild(parent);
    checkBtn.style.display = "none";
  });

  deleteBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}
