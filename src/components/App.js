import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID Tc1mwyHhewoorwHlmsnsXO3qZpn3TUM5HzmIBI0yfv4',
      },
    })

    this.setState({ images: response.data.results })
    console.log(this.state.images)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images.
        {/* Importante entender esto */}
        {/* pasamos la funcion onSearchSubmit como props */}
      </div>
    )
  }
}

export default App
