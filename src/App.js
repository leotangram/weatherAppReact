import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'

function App() {
  // State principal
  // city = state, setCity = this.setState({})
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const queryData = data => {
    // Validar que ambos campos estén
    if (data.city === '' || data.country === '') {
      // Un error
      return
    }

    // Ciudad y País existen agregarlos al state
    setCity(data.city)
    setCountry(data.country)
  }

  return (
    <div className='App'>
      <Header title='Clima react app' />
      <div className='form-container'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m6'>
              <Form queryData={queryData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
