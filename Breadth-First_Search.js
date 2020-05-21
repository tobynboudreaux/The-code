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

 