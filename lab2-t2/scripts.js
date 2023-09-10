var tableBody = document.getElementById("tableBody");
var colorPick = document.getElementById("colorPick");
var myCellRow = 0;

var number = 1;
for (var i = 1; i <= 6; i++) {
    var row = document.createElement("tr");

    for (var j = 1; j <= 6; j++) {
        var cell = document.createElement("td");
        if (number == 7) {
            myCellRow = (i+1)%2;
            cell.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            });
            // cell.addEventListener("mouseout", (e) => {
            //     e.target.style.backgroundColor = "";
            // });
            cell.addEventListener("click", (e) => {
                e.target.style.backgroundColor = colorPick.value;
            });
            cell.addEventListener("dblclick", (e) => {
                const rows = document.querySelectorAll('tr');
                for (var i = 0; i < rows.length; i++) {
                    if (i%2 == myCellRow) {
                        rows[i].style.backgroundColor = colorPick.value;
                    }
                }
            });
        }
        cell.textContent = number++;
        row.appendChild(cell);
    }

    tableBody.appendChild(row);
}