var dataDisplayed = false; 

function display() {
    var table = document.getElementsByClassName("mytable")[0];
    
    if (!dataDisplayed) {
        // Display predefined data
        var x = [
            { name: "Suji", rollno: "212", branch: "AIML" },
            { name: "Rohith", rollno: "214", branch: "AIML" },
            { name: "Raju", rollno: "213", branch: "AIML" },
            { name: "Tara", rollno: "211", branch: "AIML" }
        ];

        table.style.width = '50%';
        table.setAttribute('border', '1');
        table.setAttribute('cellpadding', '5');
        table.setAttribute('cellspacing', '0');

        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        // tr.style.backgroundColor = "#3FA2F6";

        ['Name', 'Rollno', 'Branch', 'Actions'].forEach(ele => {
            var th = document.createElement("th");
            th.appendChild(document.createTextNode(ele));
            th.style.color = "black";
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);

        var tbody = document.createElement("tbody");
        x.forEach(ele => {
            var tr = document.createElement("tr");
            Object.values(ele).forEach((i, index) => {
                var td = document.createElement("td");
                td.textContent = i;
                td.contentEditable = true;
                tr.appendChild(td);
            });
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.backgroundColor='lightblue';
            deleteButton.onclick = function() {
                table.deleteRow(tr.rowIndex);
            };

            var deleteCell = document.createElement("td");
            deleteCell.appendChild(deleteButton);
            tr.appendChild(deleteCell);

            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        dataDisplayed = true; 
    } else {
        // Add a new row
        var newRow = promptUserForRowData();
        if (newRow) {
            addRow(newRow);
        }
    }
}

function promptUserForRowData() {
    var name = window.prompt("Enter name:");
    var rollno = window.prompt("Enter roll number:");
    var branch = window.prompt("Enter branch:");

    if (name && rollno && branch) {
        return { name: name, rollno: rollno, branch: branch }; 
    } else {
        alert("Please fill all fields.");
        return null;
    }
}

function addRow(data) {
    var table = document.getElementsByClassName("mytable")[0];
    var tbody = table.getElementsByTagName('tbody')[0];
    
    var tr = document.createElement("tr");
    Object.values(data).forEach(i => {
        var td = document.createElement("td");
        td.textContent = i;
        td.contentEditable = true;
        tr.appendChild(td);
    });
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        table.deleteRow(tr.rowIndex);
    };

    var deleteCell = document.createElement("td");
    deleteCell.appendChild(deleteButton);
    tr.appendChild(deleteCell);

    tbody.appendChild(tr);
 }