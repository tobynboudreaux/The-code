import React from 'react'

export default class CellSelector extends React.Component {

    render() {
        return (
            <div id='cellSelector'>
                <div>Set Empty: <input type='checkbox' value='' onChange={this.props.select}/></div>
                <div>Set Start: <input type='checkbox' value='Start' onChange={this.props.select}/></div>
                <div>Set Goal: <input type='checkbox' value='Goal' onChange={this.props.select}/></div>
                <div>Set Obstacles: <input type='checkbox' value='Obstacle' onChange={this.props.select}/></div>
            </div>
        )
    }
}