var findShortestPath = function(startCoordinates, grid) {
    var distanceFromTop = startCoordinates[0];
    var distanceFromLeft = startCoordinates[1];
}

//location stores coordinates, shortest path
var location = {
    distanceFromTop: distanceFromTop,
    distanceFromLeft: distanceFromLeft,
    path: [],
};

var queue = [location];

//Loop through the grid searching for the goal
while (queue.length > 0) {
    //Take the first location off the queue
    var currentLocation = queue.shift();

   //Explore North
   var newLocation = exploreInDirection(currentLocation, "North", grid);
   if (newLocation.status === "Goal") {
       return newLocation.path;
   } else if (newLocation.status === "Valid") {
       queue.push(newLocation);
   }

   //Explore East
   var newLocation = exploreInDirection(currentLocation, "East", grid);
   if (newLocation.status === "Goal") {
       return newLocation.path;
   } else if (newLocation.status === "Valid") {
       queue.push(newLocation);
   }

   //Explore South
   var newLocation = exploreInDirection(currentLocation, "South", grid);
   if (newLocation.status === "Goal") {
       return newLocation.path;
   } else if (newLocation.status === "Valid") {
       queue.push(newLocation);
   }

   //Explore West
   var newLocation = exploreInDirection(currentLocation, "West", grid);
   if (newLocation.status === "Goal") {
       return newLocation.path;
   } else if (newLocation.status === "Valid") {
       queue.push(newLocation);
   }
}
