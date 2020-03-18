import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      search: ''
    }
  }

  updateState = (e) => {
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <form>
        <label>Search...</label>
        <input 
          title="search"
          type="text"
          placeholder="Search Articles"
          value={this.state.search}
          onChange={this.updateState}
        />
        <button
          type="button"
          onClick={() => this.props.filterTopic(this.state.search)}>
          <img src={require(`../../icons/search-icon.svg`)} alt="search icon"/> 
        </button>
      </form>
    )
  }
};

export default Form;