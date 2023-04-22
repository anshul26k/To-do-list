
window.addEventListener('load', () => {

       const form = document.querySelector("#new-task-form");
       const input = document.querySelector("#new-task-inpt");
       const list = document.querySelector("#tasks");

       form.addEventListener('submit', (e) => {
              e.preventDefault();

              const task = input.value;
              if (!task) {
                     alert("Plz enter text");
                     return;
              }

              const task_el = document.createElement("div");
              task_el.classList.add("task");

              const task_cont = document.createElement("div");
              task_el.classList.add("content");

              task_el.appendChild(task_cont);

              const take_input_el = document.createElement("input");
              take_input_el.classList.add("text");
              take_input_el.type = "text";
              take_input_el.value = task;
              take_input_el.setAttribute("readonly", "readonly");

              task_cont.appendChild(take_input_el);

              const act_btn = document.createElement("div");
              act_btn.classList.add("actions");

              const edit_btn = document.createElement("button");
              edit_btn.classList.add("edit");
              edit_btn.innerHTML = "EDIT";

              const dlt_btn = document.createElement("button");
              dlt_btn.classList.add("delete");
              dlt_btn.innerHTML = "DELETE"

              act_btn.appendChild(edit_btn);
              act_btn.appendChild(dlt_btn);

              task_el.appendChild(act_btn);

              list.appendChild(task_el);
              input.value = "";

              edit_btn.addEventListener('click', (e) => {
                     if (edit_btn.innerText == "EDIT") {
                            edit_btn.innerHTML = "SAVE";
                            take_input_el.removeAttribute("readonly");
                            take_input_el.focus();
                     } else {
                            edit_btn.innerHTML = "EDIT";
                            take_input_el.setAttribute("readonly", "readonly");
                     }

                     console.log("edt");
              });

              dlt_btn.addEventListener('click',(e) => {
                     list.removeChild(task_el);
              });
       });

});