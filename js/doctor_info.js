var apiKey = require('./../.env').apiKey;

function Doctor() {
  this.results = [];
}

Doctor.prototype.getDoctors = function(specaility) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ specaility +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
     $('#test').append('<h2>' + specaility + '</h2>' + "Doctors that specialize in your issue: " + result.conditions);
      console.log(result);
    })
   .fail(function(error){
     $('.showDiv').text(error.responseJSON.message);
      console.log("fail");
    });
};


exports.doctorModule = Doctor;
