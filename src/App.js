import "./App.css";
import Overview from "./components/Overview";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskToEdit: "",
      task: "",
      tasks: [
        {
          task: "",
          numberOfTasks: 0,
          isEdit: false
        }
      ]
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onHandleDelete = i => {
    const filteredTasks = this.state.tasks.filter((task, index) => {
      return index !== i;
    });
    this.setState({
      tasks: filteredTasks
    });
  };

  onChangeHandler(e) {
    console.log(e.target.value);
    this.setState({
      task: e.target.value
    });
  }

  onChangeEditHandler = e => {
    console.log(e.target.value);
    this.setState({
      taskToEdit: e.target.value
    });
  };

  submitHandler = e => {
    console.log("llegue");
    e.preventDefault();

    if (!this.state.task) {
      return;
    }

    const copyOfTasks = [...this.state.tasks];
    copyOfTasks.push({
      task: this.state.task,
      numberOfTasks:
        this.state.tasks[this.state.tasks.length - 1].numberOfTasks + 1,
      isEdit: false
    });
    this.setState({
      tasks: copyOfTasks,
      task: ""
    });
  };

  onEditHandler = (e, index) => {
    console.log("llegue");
    e.preventDefault();

    if (!this.state.taskToEdit) {
      return;
    }

    const copyOfTasks = [...this.state.tasks];

    copyOfTasks[index] = {
      ...copyOfTasks[index],
      task: this.state.taskToEdit,
      isEdit: false
    };

    console.log(copyOfTasks[index]);

    this.setState({
      tasks: copyOfTasks,
      task: "",
      taskToEdit: ""
    });

    // const copyOfTasks = [...this.state.tasks];
    // copyOfTasks.push({
    //   task: this.state.task,
    //   numberOfTasks:
    //     this.state.tasks[this.state.tasks.length - 1].numberOfTasks + 1,
    //   isEdit: false
    // });
    // this.setState({
    //   tasks: copyOfTasks,
    //   task: ""
    // });
  };

  onHandleEditInput = index => {
    const copyOfTasks = [...this.state.tasks];

    copyOfTasks[index] = {
      ...copyOfTasks[index],
      isEdit: !copyOfTasks[index].isEdit
    };

    this.setState({
      tasks: copyOfTasks
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Nueva tarea: {this.state.task}</h2>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="task">Add task</label>

          <input
            id="task"
            type="text"
            placeholder={"Add task"}
            value={this.state.task}
            onChange={e => this.onChangeHandler(e)}
          />
          <button type="submit">Submit</button>
        </form>
        <Overview
          onHandleDelete={this.onHandleDelete}
          tasks={this.state.tasks}
          onHandleEditInput={this.onHandleEditInput}
          onHandleSubmit={this.submitHandler}
          onChangeHandler={this.onChangeHandler}
          inputValue={this.state.taskToEdit}
          onEditHandler={this.onEditHandler}
          onChangeEditHandler={this.onChangeEditHandler}
        />
      </div>
    );
  }
}
