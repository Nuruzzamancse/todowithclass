import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      title: "",
      dueDate: "",
      todos: [
        {
          status: true,
          title: "First Task",
          dueDate: "15/05/2020"
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  deleteTodo(title) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.title !== title)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      todos: [
        ...this.state.todos,
        { title: this.state.title, dueDate: this.state.dueDate, status: true }
      ]
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <>
                <li>
                  {todo.title} {todo.dueDate}{" "}
                  <button onClick={() => this.deleteTodo(todo.title)}>X</button>
                </li>
              </>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Due Date:
            <input
              type="date"
              name="dueDate"
              value={this.state.dueDate}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Title
            <input
              type="text"
              name="title"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Add" />
        </form>
      </>
    );
  }
}
