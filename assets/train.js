$(document).ready(function(){
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC_djTm9xkhPrqbimVEkZci9JFdHyyPbF4",
    authDomain: "trains-65de6.firebaseapp.com",
    databaseURL: "https://trains-65de6.firebaseio.com",
    projectId: "trains-65de6",
    storageBucket: "trains-65de6.appspot.com",
    messagingSenderId: "875585733517"
  };
  firebase.initializeApp(config);

var trainData = firebase.database().ref();
//Shows current time
$("#currentTime").append(moment().format("hh:mm A"));

// Button for adding trains
$("#trainbttn").on("click", function() {
    event.preventDefault();
    // captures input 
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").subtract(10, "years").format("X");
    var frequency = $("#frequencyInput").val().trim();


    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    }

    // Uploads train data to firebsae
    trainData.push(newTrain);

    // Clears text
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#firstTrainInput").val("");
    $("#frequencyInput").val("");

    return false;
});
})

