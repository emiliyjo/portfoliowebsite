// activate airtable object
var Airtable = require("airtable");

var base = new Airtable(
  {apiKey:"keyDd4ipeCQWl3r7x"}
).base("app8mVXPpMc3jUhsk");

base("Table 1").select({
    maxRecords: 5,
    // view: "Grid view",
}).eachPage(
  function page(records, fetchNextPage){
    console.log("records:", records); 
    records.forEach(
      function (record) {
        // pull my airtable data 
      }
    
    )
  }
); 