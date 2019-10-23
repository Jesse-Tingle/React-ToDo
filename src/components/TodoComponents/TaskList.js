import React, { Component } from 'react';
// import Task from './Task';

export default class TaskList extends Component {
    constructor() {
        super()

        this.state = {
            todos: [
                {
                  task: 'Organize Garage',
                  id: 1528817077286,
                  completed: false
                },
                {
                  task: 'Bake Cookies',
                  id: 1528817084358,
                  completed: false
                }
              ],
              todo: ''
        }
    }

    render() {
        const list = this.state.todos.map(item => {
            return (
                <h4 key={item.id} >{item.task}</h4>
            )
        })

        return (
            <div>
                {list}
            </div>
        )
    }
}
