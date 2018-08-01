import React from 'react'
import {hot} from 'react-hot-loader'
import Loadable from 'react-loadable'

function Loading () {
  return <div>Loading...</div>
}

const Map = Loadable({
  loader: () => import('./Map'),
  loading: Loading
})

class App extends React.Component {
  state = {
    map: false
  }
  render () {
    return (
      <div className='text-center mt-5'>
        <button className='btn btn-primary' onClick={() => this.setState({map: !this.state.map})}>
          Toggle Map
        </button>
        <hr />
        {this.state.map && <Map />}
      </div>
    )
  }
}

export default hot(module)(App)