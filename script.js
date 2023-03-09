// activate airtable object
var Airtable = require("airtable");

// make a variable called base, which will create a new airtable object, with my api key, and specific base reference code -> both located in your airtable account

var base = new Airtable(
  {apiKey:"keyDd4ipeCQWl3r7x"}
).base("app8mVXPpMc3jUhsk");

// "Table 1" is tab text of my base
base("Table 1").select({
  maxRecords: 2,
  // view: "Grid view", 
})
.eachPage(
  function page(records, fetchNextPage){
    // console.log("running page function")
    // console.log("records:", records);
    // records = [Record1, Record2, Record3]
    records.forEach(
      function (record) {
        // console.log("this is one record:", record); 
        console.log("this is my airtable fields", record.fields);
        console.log("Date Field", record.fields.Date);
        console.log("Artist Name", record.fields.ArtistName);
        console.log("Album Cover", record.fields.AlbumCover);
        
      }
    
    )
  }
);


console.log(base);