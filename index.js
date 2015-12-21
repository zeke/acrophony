import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'
import alphabets from 'acrophonic-alphabets'
import letters from 'alphabet'

var App = React.createClass({
  getInitialState() {
    return {query: ''}
  },

  getDefaultProps() {
    return {alphabets: alphabets}
  },

  updateQuery(value){
    this.setState({query: value})
  },

  render() {
    return (
      <div>
        <Filter query={this.state.query} onFilter={this.updateQuery} />
        <AlphabetList alphabets={this.props.alphabets} query={this.state.query} />
      </div>
    )
  }
})

var Filter = React.createClass({
  onChange(event) {
    this.props.onFilter(event.target.value)
  },

  render() {
    return (
      <form>
        <input
          className='filter'
          type='text'
          ref='filterInput'
          placeholder='Enter text to acrophonize...'
          value={this.props.query}
          onChange={this.onChange}
        />
      </form>
    )
  }
})

var AlphabetList = React.createClass({
  render() {
    return (
      <ul className="alphabet-list">
        {this.props.alphabets.map(alphabet => {
           return <Alphabet key={alphabet.id} alphabet={alphabet} query={this.props.query} />
        })}
      </ul>
    )
  }
})

var Alphabet = React.createClass({

  spelling() {
    var query = this.props.query
    var words = this.props.alphabet.words

    if (!query.length) return words.join(' ')

    return query
      .toLowerCase()
      .split('')
      .map(letter => {
        return letter.match(/[a-z]/)
          ? words[letters.lower.indexOf(letter)]
          : letter
      })
      .join(' ')
  },

  render() {
    return (
      <li className="alphabet">
        <span className="alphabet-spelling">{this.spelling()}</span>
        <span className="alphabet-name">{this.props.alphabet.name}</span>
      </li>
    )
  }
})

domready(() => {
  ReactDOM.render(<App />, document.getElementById('app'))
})
