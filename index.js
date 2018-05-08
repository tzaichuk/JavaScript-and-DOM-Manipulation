// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);


// add rows of data
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < Date.length; i++) {
    
    var date = dataset[i];
    var fields = Object.keys(date);
  }
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
    // For every field in the date object, create a new cell at set its inner text to be the current value at the current datetime's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = date[field];
    }
  }


function handleSearchButtonClick() {
 
renderTable()}
