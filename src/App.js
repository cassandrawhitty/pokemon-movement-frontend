import './App.css';
import { Component } from 'react';
import SearchTypeForm from './components/SearchTypeForm';
import CardsContainer from './components/CardsContainer';

class App extends Component {

  state = {
    allMoves: [],
    selectedTypes: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/moves")
      .then(response => response.json())
      .then(moves => {
        this.setState({ allMoves: moves })
      })
  }

  filterTypes = ( event ) => {
    const input = event.target.value
    const filteredTypes = this.state.allMoves
      .filter(
        move => (
          move.move_type
          .includes(input)
        )
      )
      this.setState( { selectedTypes: filteredTypes } )
  }

  render(){
    // const { selectedTypes } = this.state
    return (
      <div className="App">
        <h1><img src="https://i.imgur.com/ZurbDHR.gif" className="pika" alt="dancing pikachu"/>Pokemon Move Types<img src="https://i.imgur.com/ZurbDHR.gif" className="pika" alt="dancing pikachu"/></h1>
        <SearchTypeForm filterTypes={ this.filterTypes } />
        <h3>Types to Search: normal, fighting, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy, unknown, shadow</h3>
        <CardsContainer moveTypes={this.state.selectedTypes} />
      </div>
    );
  }
}

export default App;

// create a component for the move card
// import component to app
// fetch from the backend 
// for each object in the array, add the name to the card component 