import React from 'react';
import '../css/QuoteForm.css'

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character : 'Homer Simpson'
    }
    this.formChange = this.formChange.bind(this);
  }

  formChange = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      this.setState({character: event.target.value});
    }
  }

  render() {
    return (
      <form
        className="QuoteForm"
      >
        <label htmlFor="character">Character:</label>
        <input
          value= {this.state.character}
          id="character"
          name="character"
          type="text"
          onChange= {this.formChange}
        />
        <p>{this.state.character}</p>
      </form>
    );
  }
}



export default QuoteForm;
