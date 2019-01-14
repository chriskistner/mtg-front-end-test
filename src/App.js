import React, { Component } from 'react';
import './App.css';
import mtg from 'mtgsdk';
import SearchForm from './SearchForm.js';
import CardList from './CardList.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: []
    }
  }

findCard = async (name) => {
  try{
    const response =await mtg.card.where({ name: name, gameFormat: 'standard'});
    this.setState({
      cards: response
    })
  }catch(err) {
    console.log(err)
  }
}

componentDidMount(){

}

  render() {
    return (
      <div className="App">
        <div className='container'>
            <h1>MTG Card Finder</h1>
              <SearchForm findCard={this.findCard}/>
              <CardList foundCards = {this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
