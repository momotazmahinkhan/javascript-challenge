// from data.js
var tableData = data;

// YOUR CODE HERE!

var tBody = d3.select("tbody");
function makeTable (tableData){
    tBody.html("")
    tableData.forEach(data => {
    var row = tBody.append("tr"); 
    Object.values(data).forEach(item => {row.append("td").text(item)});
          
    });
};
makeTable(tableData);

function filterTable (){
    var date = d3.select("#datetime").property("value");
    var filterData = tableData.filter(row => row.datetime == date);
    makeTable(filterData)
};

d3.select ("#filter-btn").on("click", filterTable);

//Bonus

function filterTwo (){
    var date = d3.select("#datetime").property("value");
    var shape = d3.select("#shape").property("value");
    var filterShapeDate = tableData.filter(row => row.datetime == date && row.shape ==shape);
    makeTable(filterShapeDate)
};

//d3.select ("#filter-btn").on("click", filterTwo);
function filterThird (){
    var date = d3.select("#datetime").property("value");
    var state = d3.select("#state").property("value");
    var filterStateDate = tableData.filter(row => row.datetime == date && row.state ==state);
    makeTable(filterStateDate)
};

//d3.select ("#filter-btn").on("click", filterThird);

function filterFourth (){
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var filterCityDate = tableData.filter(row => row.datetime == date && row.city ==city);
    makeTable(filterCityDate)
};
//d3.select ("#filter-btn").on("click", filterThird);

function filterAll (){
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var shape = d3.select("#shape").property("value");
    var filter = tableData.filter(row => row.datetime == date && row.city ==city && row.state == state && row.shape==shape);
    makeTable(filter)
};
//d3.select ("#filter-btn").on("click", filterAll);
