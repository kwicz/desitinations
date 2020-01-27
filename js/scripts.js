// Business Logic --------
function DestinationList() {
  this.destinations = [];
  this.currentId = 0;
};

DestinationList.prototype.addDest = function(destination) {
  destination.id = this.currentId;
  console.log("dest id: " + destination.id);
  this.destinations.push(destination);
  this.currentId++;
  console.log("dest id ++: " + this.currentId);
};


function destination(location, landmarks, timeOfYear, activities, cost) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.activities = activities;
  this.cost = cost;
}



// User Logic ----------


$(document).ready(function() {
  var destinationList = new DestinationList();

  $("#output").on("click","ul",function() {
    var id = parseInt(event.target.id);
    console.log("id: " + id)
    var userDestination = destinationList.destinations[id];
    console.log("test: " + destinationList.destinations[id]);

    $(this).append("<li>" + userDestination.landmarks + "</li> <li>" + userDestination.timeOfYear + "</li> <li>" + userDestination.activities + "</li> <li>" + userDestination.cost + "</li>")
  })

  $("form").submit(function(event) {
    event.preventDefault();
    var dest = new destination($("#location").val(),$("#landmarks").val(),$("#timeOfYear").val(),$("#activities").val(),$("#cost").val());
    destinationList.addDest(dest);
    $("#output").append("<ul id='" + dest.id + "'>" + dest.location + "</ul>");
  }) 
})