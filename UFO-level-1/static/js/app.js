// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Fill the table
// Add data from each element in data across a row
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Set up filtering of the table  
// Select the button
var filter_button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
filter_button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var date_inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var date_inputValue = date_inputElement.property("value");

  console.log(date_inputValue);
  //console.log(people);

  var filteredData = tableData.filter(sighting => sighting.datetime === date_inputValue);

  console.log(filteredData);

  // clear out the previous table
  //document.getElementsByTagName("tr")[2].remove();

  // Fill the table with filtered data
  // Add data from each element in data across a row
  filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

//function myFunction() {
  // Declare variables
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }