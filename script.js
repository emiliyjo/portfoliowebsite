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
        console.log("Album Cover", record.fields.AlbumCover[0].url);
        

        var albumCover = document.createElement("img");
        albumCover.classList.add("airtable-image");
        albumCover.src = record.fields.AlbumCover[0].url;
        document.body.appendChild(albumCover);
        
        var artistName = document.createElement("span");
        artistName.innerHTML = record.fields.ArtistName;
        document.body.appendChild(artistName);
        
        // create new html element > img, span, div, h1
        // get data from airtable > cover art, artist name, location, etc 
        // set content of html element to the specific airtable data > cover art url > img url, location > h1.innerhtml
        // append the html element to the body section of your html page 
        // <body>
            // <img src ="">
        // </body>
      }
    
    )
  }
);


console.log(base);