document.querySelector('#add').addEventListener('click', function() {

    const inputs = document.querySelectorAll(".form-control");

    // Verify if the input fields are not empty and a category is selected
    for (let i = 0; i < inputs.length; i++)
    {
        if (inputs[i].reportValidity() == false)
        {
            return;
        }
    }

    const date = new Date(inputs[3].value).toLocaleDateString('en-GB');

    // Find a container for the date, or create a new one if it doesn't exist
    const container = document.querySelector(`[data-date="${date}"]`) || createContainer(date);

    // Create a new row for the expense and append it to the table
    const row = createRow(inputs);
    container.querySelector('.table').appendChild(row);

});

function createContainer(date)
{
    // Create a new container for the date and append it to the page
    const container = document.createElement('div');
    container.className = 'cont my-5';
    container.dataset.date = date;

    // inserting the date as a header in the container
    const heading = document.createElement('h2');
    heading.textContent = date;
    container.appendChild(heading);

    // creating a table to insert the expenses as a row & cells in this table through the create row function
    const table = document.createElement('table');
    table.className = 'table table-borderless text-center mt-4';
    container.appendChild(table);

    // inserting the container into the expenses div' after adding the date and the expenses table
    const expenses = document.querySelector('#expenses');
    expenses.appendChild(container);

    return container;
}

function createRow(inputs)
{
    // Create a new row for the expense and return it
    const row = document.createElement('tr');

    for (let i = 0; i < inputs.length - 1; i++)
    {
        const cell = document.createElement('td');
        cell.className = "text-start cell";
        cell.textContent = inputs[i].value;
        if (i == 2)
        {
            cell.textContent = inputs[i].value + " EGP";
        }
        row.appendChild(cell);
        inputs[i].value = '';
    }

    const trashIcon = document.createElement("i");
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function(){


        var contDiv = trashIcon.parentNode.parentNode;

        // Check if the table element has more than one row
        if (contDiv.childElementCount > 1) {

            // if yes, it still has many rows, then remove just the required row
            row.remove();
          }
          else {

            // if no, and this the last row to be deleted, then remove the entire container (table element parent node)
            contDiv.parentNode.remove();
          }
        });
    row.appendChild(trashIcon);
    return row;
}


/*document.querySelector('#add').addEventListener('click', function()
{

    const inputs = document.querySelectorAll(".form-control");

    // Verify if the input fields are not empty and a category is selected
    for (let i = 0; i < inputs.length; i++)
    {
        if (inputs[i].value.length < 1  || inputs[i].selectedIndex == 0)
        {
            return;
        }
    }

    const dates = [];
    let date = new Date(inputs[3].value).toLocaleDateString('en-GB');
    /*if (dates.includes(date))
    {

    }
    dates.push(date);/
    var divDate = document.createElement("div");
    divDate.className = "container";
    divDate.textContent = date;
    const target  = document.querySelector('#myTable')
    //target.parentNode.insertBefore(divDate, target);


    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTable");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.tBodies[0].insertRow(0);

    // Insert new cells (<td> elements) at the <tr> element and insert the input values in these cells:
    for (let i = 0; i < inputs.length - 1; i++)
    {
        var cell =  row.insertCell(i);
        cell.className = "col-4";
        cell.innerHTML = inputs[i].value;
        //inputs[i].value = '';
    }

});*/
