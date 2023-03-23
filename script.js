// activate airtable object
var Airtable = require("airtable");

// make a variable called base, which will create a new airtable object, with my api key, and specific base reference code -> both located in your airtable account

var base = new Airtable(
  {apiKey:"keyDd4ipeCQWl3r7x"}
).base("app8mVXPpMc3jUhsk");

// "Table 1" is tab text of my base
base("Table 1").select({
  
  // view: "Grid view", 
})
.eachPage(
  function page(records, fetchNextPage){
    // console.log("running page function")
    // console.log("records:", records);
    records = [Record1, Record2, Record3]
    records.forEach(
      function (record) {
        // console.log("this is one record:", record); 
        // console.log("this is my airtable fields", record.fields);
        // console.log("Date Field", record.fields.Date);
        // console.log("Artist Name", record.fields.ArtistName);
        console.log("Album Cover", record.fields.AlbumCover[0].url);
        
        // create an img html element 
        var albumCover = document.createElement("img");
        // assign a css class 
        albumCover.classList.add("airtable-image");
        // put airtable img src inside our html img tag 
        albumCover.src = record.fields.AlbumCover[0].url;
        // append new img tag to html document
        document.body.appendChild(albumCover);
        
        var artistName = document.createElement("span");
        artistName.innerHTML = record.fields.ArtistName;
        document.body.appendChild(artistName);
        
      }
    
    )
  }
);


console.log(base);