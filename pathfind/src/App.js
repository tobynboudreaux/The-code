import React from 'react';
import Matrix from './Matrix.js'
import { grid } from './data.js'
import { Path } from './Path'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = ({
      start: [],
      goal: [],
      obstacles: [],
      path: [],
      grid: grid,
      currentLoc: [],
    })
  }

  updateGranStart = (value) => {
    this.setState({ start: value })
  }

  updateGranGoal = (value) => {
    this.setState({ goal: value }) 
  }

  updateGranObstacles = (value) => {
    this.setState({ obstacles: [...this.state.obstacles, value]})
  }

  findPath = () => {
    grid[parseInt(this.state.goal[0][0])][parseInt(this.state.goal[1][0])] = "Goal"
    grid[this.state.start[0]][this.state.start[1]] = "Start"
    
    this.state.obstacles ? this.state.obstacles.map((obstacle) => grid[obstacle[0][0]][obstacle[1]] = "Obstacle") : console.log(Path(this.state.start, grid))
    
    let path = Path(this.state.start, grid)
    console.log(path)
    var dft = parseInt(this.state.start[0]);
    var dfl = parseInt(this.state.start[1]);  
    

    path.map((direction) => {
      let newDft;
      let newDfl;
      if (direction === "North") {
        newDft = (dft -= 1);
        newDfl = dfl
        this.setState( state => {const currentLoc = state.currentLoc.push([newDft, newDfl]); return(currentLoc)})

        // this.setState({ currentLoc: [...this.state.currentLoc, [dft, dfl]] })
      } else if (direction === "East") {
        newDfl = (dfl += 1);
        newDft = dft
        this.setState( state => {const currentLoc = state.currentLoc.push([newDft, newDfl]); return(currentLoc)})

        // this.setState({ currentLoc: [...this.state.currentLoc, [dft, dfl]] })
      } else if (direction === "South") {
        newDft = (dft += 1);
        newDfl = dfl
        this.setState( state => {const currentLoc = state.currentLoc.push([newDft, newDfl]); return(currentLoc)})

        // this.setState({ currentLoc: [...this.state.currentLoc, [dft, dfl]] })
      } else if (direction === "West") {
        newDfl = (dfl -= 1);
        newDft = dft
        this.setState( state => {const currentLoc = state.currentLoc.push([newDft, newDfl]); return(currentLoc)})

        // this.setState({ currentLoc: [...this.state.currentLoc, [dft, dfl]] })
      }
    })

  }

  // Path(this.state.start, grid).map((dir) => (this.setState( state => {const path = state.path.push(dir); return(path)} )))

  
  mapPath = () => {
    this.state.path.map((d) => console.log(d))
  }

  randomMaze = (grid, vertex) => {
    var dft = vertex[0]
    var dfl = vertex[1]
    var path = [vertex];
    vertex = 'Visited'
    console.log(dft, dfl, path, vertex)
    // grid.map((x, y) => console.log(dft, dfl))
  }


render() {
  this.randomMaze(grid, [0, 0])
  return (
    <div className="App">
      <button onClick={this.findPath}>Find Path</button>
          <Matrix 
          values={grid} 
          start={this.updateGranStart.bind(this)} 
          goal={this.updateGranGoal.bind(this)} 
          obstacles={this.updateGranObstacles.bind(this)} 
          path={this.state.currentLoc}
          />
    </div>
  );
}
}

export default App;
