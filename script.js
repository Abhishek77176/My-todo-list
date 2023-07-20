const container = document.getElementById("add-section");
const inp = document.getElementById("add");
const button = document.getElementById("myButton");
button.addEventListener("click",function(){
    const text = inp.value;
    const task = document.createElement('div');
    task.classList.add("task");

    // Create a checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    const textSpan = document.createElement('p');
    textSpan.textContent = text;
    textSpan.classList.add("task_text");

    // Create a cut button element
    const cutButton = document.createElement("button");
    cutButton.textContent = "X";
    cutButton.addEventListener("click", function () {
      task.remove();
    });
    cutButton.classList.add('btn');
    task.appendChild(checkbox);
    task.appendChild(textSpan);
    task.appendChild(cutButton);
    container.appendChild(task);
    checkbox.value = "";
});
