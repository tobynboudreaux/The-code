
export const Path = (startCoordinates, grid) => {
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
    
    let locationStatus = function(location, grid) {
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
    
    let exploreInDirection = function(currentLocation, direction, grid) {
        var newPath = currentLocation.path.slice();
        newPath.push(direction);
    
        var dft = parseInt(currentLocation.distanceFromTop);
        var dfl = parseInt(currentLocation.distanceFromLeft);
    
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
   
    let gridSize = 56