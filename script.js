const btn_add = document.querySelector(".btn-add");
const input_text = document.querySelector("#taskId");
let myUl = document.getElementById("#myUl");

// add todos
btn_add.addEventListener("click", function () {
  if (input_text.value === "") {
    alert("Enter your task");
  } else {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("done");
    checkbox.name = "task-done";

    let p = document.createElement("p");
    p.innerHTML = input_text.value;

    let x = document.createElement("button");
    x.className = "btn-delete";
    x.innerHTML = "X";

    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(x);

    myUl.appendChild(li);

    input_text.value = "";
  }
});
// Delete and toggle todos
myUl.addEventListener("click", function (e) {
  if (e.target.tagName === "P") {
    e.target.classList.toggle("striken");
    e.target.previousElementSibling.checked =
      !e.target.previousElementSibling.checked;
  } else if (e.target.tagName === "INPUT") {
    e.target.nextElementSibling.classList.toggle("striken");
  } else if (e.target.className === "btn-delete") {
    e.target.parentElement.remove();
  }
});
