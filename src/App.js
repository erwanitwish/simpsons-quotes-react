import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';
import QuoteCardRandom from './components/QuoteCardRandom'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      quote: 'Shut up, brain. I got friends now. I don\'t need you anymore.',
      character: "Lisa Simpson",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
    }
  }

  getQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data => {
      console.log(data);
      this.setState({
        quote: data[0].quote,
        character: data[0].character,
        image: data[0].image,
        });
    });
  }

  render() {
    return (
      <div className="App">
            <Navbar />
            <QuoteForm />
            <QuoteList />
            <QuoteCardRandom quote={this.state} />
            <button type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}


export default App;
