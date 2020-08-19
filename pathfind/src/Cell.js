import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: props.color,
      path: props.path
    }
  }

  handleStart = () => {
    this.props.start([[this.props.x], [this.props.y]])
  }

  handleGoal = () => {
    this.props.goal([[this.props.x], [this.props.y]])
  }

  handleObstacles = () => {
    this.props.obstacles([[this.props.x], this.props.y])
  }

  handleColor = () => {
    let type = this.props.checkType
   if (type === "Start") { 
    this.setState({
      color: 'blue'
    }) 
  } else if (type === "Goal") { 
    this.setState({
      color: 'green'
    }) 
  } else if (type === "Obstacle") { 
    this.setState({
      color: 'black'
    }) 
  } else if (type === "") { 
    this.setState({
      color: 'white'
    }) 
  }
  }

  handleOnClick = (type) => {
    if (type === "Start") {
      return this.handleStart.bind(this)
    } else if (type === "Goal") {
      return this.handleGoal.bind(this)
    } else if (type === "Obstacle") {
      return this.handleObstacles.bind(this)
    } 
  }
  
  render() {
    let col;
    col = this.state.color;
    if (this.props.value === "Visited") {
      col = 'purple'; 
    } else {
      col = this.state.color
    }

    this.state.path

      .filter(path => this.props.x === path[0] && this.props.y === path[1])
      .map((path) => {
        if (path) {
          col = 'red';
        }
      })
      
    return (
      <div onClick={this.handleColor}>
      <div 
        className="cell"
        style={{backgroundColor: col}}
        onClick={this.handleOnClick(this.props.checkType)}
        >
      </div>
      </div>
    )
  }
  
}