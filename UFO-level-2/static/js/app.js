// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// set up function to fill table
function FillTable(sighting_data) {
  // Add data from each element in data across a row
  sighting_data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Initial fill of the table
FillTable(tableData);

// Set up filtering of the table  
// Select the button
var filter_button = d3.select("#filter-btn");
var reset_button = d3.select("#reset-btn")

// Create event handlers 
filter_button.on("click", runEnter);
reset_button.on("click", runClear);


// Complete the event handler function for the Apply Filters button
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // apply filters
  // filter by date
  if (d3.select("#datetime").property("value")) {
    console.log("there is a datetime filter")
    var date_inputValue = d3.select("#datetime").property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === date_inputValue);
  }
  else {
    console.log("no datetime filter");
    // we still want a filteredData variable for the following code, even if no date filter entered
    var filteredData = tableData
  }

  // filter by city
  if (d3.select("#city").property("value")) {
    console.log("there is a city filter")
    var city_inputValue = d3.select("#city").property("value").toLowerCase();
    var filteredData = filteredData.filter(sighting => sighting.city === city_inputValue);
  }
  else {
    console.log("no city filter");
  }

  // filter by state
  if (d3.select("#state").property("value")) {
    console.log("there is a state filter")
    var state_inputValue = d3.select("#state").property("value").toLowerCase().substring(0, 2);
    var filteredData = filteredData.filter(sighting => sighting.state === state_inputValue);
  }
  else {
    console.log("no state filter");
  }

    // filter by country
  if (d3.select("#country").property("value")) {
    console.log("there is a country filter")
    var country_inputValue = d3.select("#country").property("value").toLowerCase().substring(0, 2);
    var filteredData = filteredData.filter(sighting => sighting.country === country_inputValue);
  }
  else {
    console.log("no country filter");
  }

  // filter by shape
  if (d3.select("#shape").property("value")) {
    console.log("there is a shape filter")
    var shape_inputValue = d3.select("#shape").property("value").toLowerCase();
    var filteredData = filteredData.filter(sighting => sighting.shape === shape_inputValue);
  }
  else {
    console.log("no shape filter");
  }

  console.log(filteredData);

  // clear out the previous table
  tbody.selectAll("tr").remove();

  // put in a message if there are no sightings that match filter criteria
  if (filteredData.length === 0) {
    var row = tbody.append("tr");
    var cell = row.append("td");
    cell.text("No sightings match your criteria")
  }
  else {
    // Fill the table with filtered data
    FillTable(filteredData);
  }
};

// Complete the event handler function for the Clear Filters button
function runClear() {
  // clear out the previous table
  tbody.selectAll("tr").remove();
  // Fill the table
  FillTable(tableData);
}