const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.querySelector("input");
const trashIcon = document.getElementById("trash");

function addItem(){

    if (input.reportValidity() == false)
    {
        return;
    }
    else
    {
        var divParent = document.createElement("div");
        var divChild = document.createElement("div");
        var checkIcon = document.createElement("i");
        var trashIcon = document.createElement("i");

        divParent.className = "item";
        divParent.innerHTML = '<div>'+input.value+'</div>';

        checkIcon.className = "fa-solid fa-square-check";
        checkIcon.style.color = "lightgray";

        let CheckIconclicked = false;
        checkIcon.addEventListener("click", function(){

            if (CheckIconclicked == false)
            {
                this.style.color = "limegreen";
                this.parentNode.parentNode.style.textDecoration = "line-through";
                CheckIconclicked = true;
            }
            else
            {
                this.style.color = "lightgray";
                this.parentNode.parentNode.style.textDecoration = 'none';
                CheckIconclicked = false;
            }
        });

        divChild.appendChild(checkIcon);

        trashIcon.className = "fa-solid fa-trash";
        trashIcon.style.color = "darkgray";
        trashIcon.addEventListener("click", function(){
            divParent.remove();
        });

        divChild.appendChild(trashIcon);

        divParent.appendChild(divChild);

        toDoItems.appendChild(divParent);

        input.value = '';

    }



}
