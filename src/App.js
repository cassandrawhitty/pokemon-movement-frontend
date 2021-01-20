import './App.css';
import { Component } from 'react';
import SearchTypeForm from './components/SearchTypeForm';
import CardsContainer from './components/CardsContainer';

class App extends Component {

  state = {
    allMoveTypes: [],
    selectedTypes: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/types")
      .then(response => response.json())
      .then(types => {
        this.setState({ allMoveTypes: types })
      })
  }

  filterTypes = ( event ) => {
    const input = event.target.value
    const filteredTypes = this.state.allMoveTypes
      .filter(
        type => (
          type.name
          .includes(input)
        )
      )
      this.setState( { selectedTypes: filteredTypes } )
  }

  render(){
    // const { selectedTypes } = this.state
    return (
      <div className="App">
        <h1>Pokemon Move Types</h1>
        <SearchTypeForm filterTypes={ this.filterTypes } />
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