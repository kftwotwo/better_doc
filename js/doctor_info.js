var apiKey = require('./../.env').apiKey;

function Doctor() {
  this.results = [];
}
Doctor.prototype.getDoctors = function(specaility) {
  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query="+ specaility + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + apiKey)
  .then(function(result) {
    result.data.forEach(function(docs){
      $('#thmb-doc').append("<div class='thumbnail'>"+ "<img src=" + docs.profile.image_url + ">" + "<div class='caption'><h3>" + docs.profile.first_name + "</h3>" + "<p><a href='#' class='btn btn-primary' role='button'>Contact</a>" + "</div>");
    });
    console.log(result);
  })
  .fail(function(error){
   $('.showDiv').text(error.responseJSON.message);
    console.log("fail");
  });
};


exports.doctorModule = Doctor;
