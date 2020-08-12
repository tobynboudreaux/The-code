 var findShortestPath = function(startCoordinates, grid) {
    var distanceFromTop = startCoordinates[0];
    var distanceFromLeft = startCoordinates[1];

    var location = {
        distanceFromTop: distanceFromTop,
        distanceFromLeft: distanceFromLeft,
        path: [],
        status: 'Start'
    };

 var queue = [location];

while (queue.length > 0) {
        var currentLocation = queue.shift();

        var newLocation = exploreInDirection(currentLocation, "North", grid);
        if (newLocation.status === "Goal") {
            return newLocation.path;
        } else if (newLocation.status === "Valid") {
            queue.push(newLocation);
        }

        var newLocation = exploreInDirection(currentLocation, "East", grid);
        if (newLocation.status === "Goal") {
            return newLocation.path;
        } else if (newLocation.status === "Valid") {
            queue.push(newLocation);
        }

        var newLocation = exploreInDirection(currentLocation, "South", grid);
        if (newLocation.status === "Goal") {
            return newLocation.path;
        } else if (newLocation.status === "Valid") {
            queue.push(newLocation);
        }

        var newLocation = exploreInDirection(currentLocation, "West", grid);
        if (newLocation.status === "Goal") {
            return newLocation.path;
        } else if (newLocation.status === "Valid") {
            queue.push(newLocation);
        }
    }

    return false;

};

var locationStatus = function(location, grid) {
    var gridsize = grid.length;
    var dft = location.distanceFromTop;
    var dfl = location.distanceFromLeft;

    if (location.distanceFromLeft < 0 ||
        location.distanceFromLeft >= gridSize ||
        location.distanceFromTop < 0 ||
        location.distanceFromTop >= gridSize) {
            return "Invalid";
        } else if (grid[dft][dfl] === "Goal") {
            return "Goal";
        } else if (grid[dft][dfl] !== "Empty") {
            return "Blocked";
        } else {
            return "Valid";
        }
};

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

var newLocation = {
        distanceFromTop: dft,
        distanceFromLeft: dfl,
        path: newPath,
        status: "Unknown"
    };
    newLocation.status = locationStatus(newLocation, grid);

    if (newLocation.status === "Valid") {
        grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = "Visited";
    }

    return newLocation;
};
// make grid
var gridSize = 16;
var grid = [];
for (var i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (var j = 0; j < gridSize; j++) {
        grid[i][j] = 'Empty';
    }
}

// Test locations and path
grid[0][0] = "Start";

grid[0][4] = "Goal";
grid[0][1] = "Obstacle";
grid[1][4] = "Obstacle";
grid[1][3] = "Obstacle";
grid[2][1] = "Obstacle";

console.log(findShortestPath([0,0], grid));

// var grid = document.createElement('table') 
// for (var i = 0; i < grid; i++) {
//     for (var j = 0; j < grid; j++) {
//         HTMLTableRowElement = table.rows[i];
//         HTMLTableColElement = row.cells[j];
// }
// }