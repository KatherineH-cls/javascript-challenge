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
var form = d3.select("form").selectAll("li");




//Create filtering function
function UFOfilters(sighting){
  
}

// Create event handlers 
filter_button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  

  // select filter criteria

  // filter by date
  if (d3.select("#datetime").property("value") ){
    console.log("there is a datetime filter")
    var date_inputValue = d3.select("#datetime").property("value");
    var filteredData1 = tableData.filter(sighting => sighting.datetime === date_inputValue);
  }
  else {
    console.log("no datetime filter");
    var filteredData1 = tableData
  }

  // filter by city
  if (d3.select("#city").property("value") ){
    console.log("there is a city filter")
    var city_inputValue = d3.select("#city").property("value");
    var filteredData2 = filteredData1.filter(sighting => sighting.city === city_inputValue);
  }
  else {
    console.log("no city filter");
    var filteredData2 = filteredData1
  }


  // if (d3.select("#city").empty === false){
  //   var city_inputValue = d3.select("#city").property("value");
  //   console.log(city_inputValue);
  // }
  // if (d3.select("#state").empty === false){
  //   var state_inputValue = d3.select("#state").property("value");
  //   console.log(state_inputValue);
  // }
  // if (d3.select("#country").empty === false){
  //   var country_inputValue = d3.select("#country").property("value");
  //   console.log(country_inputValue);
  // }
  // if (d3.select("#shape").empty === false){
  //   var shape_inputValue = d3.select("#shape").property("value");
  //   console.log(shape_inputValue);
  // }

  // Select the input element and get the raw HTML node
  // var date_inputElement = d3.select("#datetime");

  // Get the value property of the input element
  // var date_inputValue = date_inputElement.property("value");

  // console.log(date_inputValue);
  //console.log(people);

  
  console.log(filteredData2);

  // clear out the previous table
  tbody.selectAll("tr").remove();

  // Fill the table with filtered data
  // Add data from each element in data across a row
  filteredData2.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

