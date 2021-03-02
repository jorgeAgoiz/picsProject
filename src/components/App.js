import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Importante entender esto */}
        {/* pasamos la funcion onSearchSubmit como props */}
      </div>
    )
  }
}

export default App
