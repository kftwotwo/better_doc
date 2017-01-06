function Doctor() {

}
Doctor.prototype.docSearch = function (specaility) {
  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query="+ specaility + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=68557f043bbcc8777c1f8356cec25616");

  $("#test").append("<li>Finding..</li>");
  console.log("object");

  response.docs.forEach(function(doc) {
        $("#test").append("<li>" + doc.first_name + "</li>");
    });
};
exports.docStuffModule = Doctor;
