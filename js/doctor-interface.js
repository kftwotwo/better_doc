var docStuff = require("./../js/doctor_info.js").docStuffModule;
var apiKey = require('./../.env').apiKey;

// $(function(){
//   var newDoc = new Doctor();
//   var specaility = "";
// });

$("#doc-form").submit(function(event) {
    event.preventDefault();
    console.log("button clicked");
    $("#doc-input").val();
});
