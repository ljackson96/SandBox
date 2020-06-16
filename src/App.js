import React from "react";
import Person from "./Person/Person";
import "./styles.css";

export default class App extends React.Component {
  state = {
    persons: [
      {
        name: "Me",
        age: 23
      },
      {
        name: "you",
        age: 21
      },
      {
        name: "We",
        age: 30
      }
    ]
  };

  handleClick = () => {
    //console.log("clicked");
    this.setState({
      persons: [
        {
          name: "Let",
          age: 23
        },
        {
          name: "you",
          age: 21
        },
        {
          name: "We",
          age: 100
        }
      ]
    });
  };

  render() {
    const persons = this.state.persons.map((person, indx) => {
      return <Person key={indx} name={person.name} age={person.age} />;
    });

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <button onClick={this.handleClick}>Switch Name: </button>
        {persons}
      </div>
    );
  }
}
