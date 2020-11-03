// from data.js
var tableData = data;

// Table body
var tablebody = d3.select("tbody");

// Create a function to fill the table
function fillTable() {
    tableData.map(data => {

        // Rows
        var row = tablebody.append("tr");
    
        // Append data
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
}

// Proceed to fill table
fillTable();

// Filter table using the user input: date
var button1 = d3.select("#filter-btn");

button1.on("click", function() {

    // Obtain user input from input field
    var userInput = d3.select("#datetime").property("value");

    console.log(userInput);
    
    // Filtered table
    var filteredTable = tableData.filter(data => data.datetime === userInput);
    console.log(filteredTable);

    // Need to remove the data from the base table
    tablebody.html("");

    // Create the filtered table
    filteredTable.forEach(obj => {
        
        // Rows
        var row = tablebody.append("tr");

        // Append data
        row.append("td").text(obj.datetime);
        row.append("td").text(obj.city);
        row.append("td").text(obj.state);
        row.append("td").text(obj.country);
        row.append("td").text(obj.shape);
        row.append("td").text(obj.durationMinutes);
        row.append("td").text(obj.comments);
    });
});

// Unfilter filtered table to retrun to base table
var button2 = d3.select("#unfilter-btn");

button2.on("click", function(){
    tablebody.html("");
    fillTable();
    d3.select("#datetime").node().value = "";    
});