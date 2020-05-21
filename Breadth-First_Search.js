/* Start location will be in the following format:
 [distanceFromTop, distanceFromLeft] */
 var findShortestPath = function(startCoordinates, grid) {
    var distanceFromTop = startCoordinates[0];
    var distanceFromLeft = startCoordinates[1];

    /* Each "location" will store its coordinates
    and the shortest path required to arrive there */
    var location = {
        distanceFromTop: distanceFromTop,
        distanceFromLeft: distanceFromLeft,
        path: [],
        status: 'Start'
    };

    //Initialize the queue witht the start location already inside 
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

    //No valid path found
    return false;

};

//This function will check a location's status
//(a location is "valid" if it is on the grid, is not an "obstacle",
//and has not yet been visited by our algorithm)
//Returns "Valid", "Invalid", "Blocked", or "Goal"
var locationStatus = function(location, grid) {
    var gridsize = grid.length;
    var dft = location.distanceFromTop;
    var dfl = location.distanceFromLeft;

    if (location.distanceFromLeft < 0 ||
        location.distanceFromLeft >= gridSize ||
        location.distanceFromTop < 0 ||
        location.distanceFromTop >= gridSize) {
            //location is not on the grid--return false
            return "Invalid";
        } else if (grid[dft][dfl] === "Goal") {
            return "Goal";
        } else if (grid[dft][dfl] !== "Empty") {
            //location is either an obstacke or has been visited
            return "Blocked";
        } else {
            return "Valid";
        }
};

//Explores the grid from the given location in the given direction
var exploreInDirection = function(currentLocation, direction, grid) {
    var newPath = currentLocation.path.slice();
    newPath.push(direction);

    var dft = currentLocation.distanceFromTop;
    var dfl = currentLocation.distanceFromLeft;

    if (direction === "North") {
        dft -= 1;
    } else if (direction === "East") {
        dfl += 1;
    } else if (direction === "South") {
        dft += 1;
    } else if (direction === "West") {
        dfl -= 1;
    }