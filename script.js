// activate airtable object
var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyNgZNOwpH4aj3ex" }).base(
  "appu1J1FuwPeuC2Vc"
);

base("Imported table")
  .select({
    // maxRecords:10,
    // view: "Grid view",
  })
  .eachPage(function page(records, fetchNextPage) {
    // console.log("records:", records);
    records.forEach(function (record) {
      // pull my airtable data
      // each record will have its own div
      let airtableItem = document.createElement("div");
      // add some data specific meta to my new divs for filtering
      airtableItem.classList.add("airtable-item");
      airtableItem.setAttribute("data-style", record.fields.Style);

      // create a img tag for my album art

      // create a span for my artist name
      let OCCUR_DATE = document.createElement("DATE");
      OCCUR_DATE.innerHTML = record.fields.OCCUR_DATE;
      
        let OCCUR_TIME = document.createElement("time");
      OCCUR_TIME.innerHTML = record.fields.OCCUR_TIME;
      
        let PERP_AGE_GROUP = document.createElement("age");
      PERP_AGE_GROUP.innerHTML = record.fields.PERP_AGE_GROUP;
      
      let PERP_SEX = document.createElement("perpsex");
      PERP_SEX.innerHTML = record.fields.PERP_SEX;
      
           let PERP_RACE = document.createElement("perprace");
      PERP_RACE.innerHTML = record.fields.PERP_RACE;
      
                 let VIC_AGE_GROUP = document.createElement("VICAGE");
      VIC_AGE_GROUP.innerHTML = record.fields.VIC_AGE_GROUP;
     
                 let VIC_SEX = document.createElement("VICSEX");
      VIC_SEX.innerHTML = record.fields.VIC_SEX;
               let VIC_RACE = document.createElement("VICRACE");
      VIC_RACE.innerHTML = record.fields.VIC_RACE;



      // appending to div holding each airtable record
      airtableItem.append(OCCUR_DATE);
      airtableItem.append(OCCUR_TIME);
       airtableItem.append(PERP_AGE_GROUP);
          airtableItem.append(PERP_SEX);
                airtableItem.append(PERP_RACE);
         airtableItem.append(VIC_AGE_GROUP);
          airtableItem.append(VIC_SEX);
                airtableItem.append(VIC_RACE);
   
  
      // append div to body
      document.querySelector('.airtable-items').append(airtableItem);
    });
  });

// set up a event listener for my empowering button
// listen for user clicker, once it is clicker, serach for divs with data-mood, empowering



document.querySelectorAll('.btn-filter').forEach(btn => {
  // console.log('btn', btn)
  btn.addEventListener('click', (event) => {
    console.log('event', event)
    let listofAirtableItems = document.querySelectorAll(".airtable-item");
  
  console.log('listofAirtableItems', listofAirtableItems)

  // search for data-mood, containg Manhattan
  listofAirtableItems.forEach((item) => {
    console.log('item', event.target.dataset.style);
    item.classList.remove("hidden");
    // if item.dataset.Style equal to "Manhattan, then we trigger something
    console.log("div dataset", item.dataset.style, "button id",event.target.dataset.style);
    if (item.dataset.style == event.target.dataset.style) {
      // if the div has data-Style Manhattan, add red background by adding css class
      item.classList.remove("hidden");
      console.log('show',item);
    } else {
      item.classList.add("hidden");
      console.log('hide',item);
    }
  });
  })
})
