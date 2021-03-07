// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 library
var tbody = d3.select("tbody");

// Declare function for table build
function buildTable(data) {

    // Clear existing table contents
    tbody.html("");

    // Loop through each object and append into a table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

