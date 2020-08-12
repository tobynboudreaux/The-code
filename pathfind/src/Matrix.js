import React, { Component } from 'react';
import Cell from './Cell.js'
import CellSelector from './CellSelector.js';

export default class Matrix extends Component {

  state = {
    selector: '',
    checked: false
  }
  
  genRow = (vals, y) => {
    return vals.map((val, idx) => 
    <Cell 
    key={[parseInt(y), parseInt(idx)]} 
    value={val} 
    x={y} 
    y={idx} 
    color="white"
    start={this.updateParStart.bind(this)} 
    goal={this.updateParGoal.bind(this)} 
    obstacles={this.updateParObstacles.bind(this)}
    grid={this.props.values} 
    checkType={this.state.selector} 
    path={this.props.path}
    />)
  }
  
  genMatrix = () => {
    return this.props.values.map((rowVals, idx) => 
    <div className="row">{this.genRow(rowVals, idx)}</div>)
  }

  updateParStart = (value) => {
    this.props.start(value)
  }

  updateParGoal = (value) => {
    this.props.goal(value)
  }

  updateParObstacles = (value) => {
    this.props.obstacles(value)
  }
  

  setCellSelect = (e) => {
    let select = e.target.value
    this.setState({
      selector: select 
    })
  }

  render() {
    
    return (
      <div>
        <CellSelector 
        select={this.setCellSelect} 
        checked={this.state.checked}
        />
      <div id="matrix">
        {this.genMatrix()}
      </div>
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}