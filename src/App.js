import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';
import QuoteCardRandom from './components/QuoteCardRandom'
import axios from 'axios'

const sampleQuote = [
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  }]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      quote: 'https://simpsons-quotes-api.herokuapp.com/quotes'
    }
  }
  getQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data => {
      console.log(data);
      this.setState({
        quote: data[0]});
    })
  }

  render() {
    return (
      <div className="App">
            <Navbar />
            <QuoteForm />
            <QuoteList />
            <QuoteCardRandom quote={this.state.quote} />
            <button type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}


export default App;
