var Doctor = require('./../js/doctor_info.js').doctorModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  document.getElementById("doc-input").defaultValue = "toothache";
  var currentDoctorObject = new Doctor();
  $('#input-button').click(function(){
    var specaility = $('#doc-input').val();
    console.log(specaility);
    $('#doc-input').val("");
    currentDoctorObject.getDoctors(specaility);
  });
});
