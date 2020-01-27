// Business Logic --------
function DestinationList() {
  this.destinations = [];
  this.currentId = 0;
};

DestinationList.prototype.addDest = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
};

DestinationList.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
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
    var id = event.target.id;
    var test = destinationList.destinations[0].location;
    console.log(test)

    // var id = $("ul#id").val();
    // console.log(id)
    // $(this).append("<li>" + this.landmarks + "</li> <li>" + this.timeOfYear + "</li> <li>" + this.activities + "</li> <li>" + this.cost + "</li>")
  })

  $("form").submit(function(event) {
    event.preventDefault();
    
    var dest = new destination($("#location").val(),$("#landmarks").val(),$("#timeOfYear").val(),$("#activities").val(),$("#cost").val());
    console.log(dest)
    destinationList.addDest(dest);
    $("#output").append("<ul id='" + dest.id + "'>" + dest.location + "</ul>");

    console.log(destinationList)
    console.log(dest.id);
  }) 
})