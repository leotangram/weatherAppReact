import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Error from './components/Error'

function App() {
  // State principal
  // city = state, setCity = this.setState({})
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [error, setError] = useState(false)

  const queryData = data => {
    // Validar que ambos campos estén
    if (data.city === '' || data.country === '') {
      // Un error
      setError(true)
      return
    }

    // Ciudad y País existen agregarlos al state
    setCity(data.city)
    setCountry(data.country)
    setError(false)
  }

  // Cargar un componente condicionalmente
  let component
  if (error) {
    // Hay un error, mostrarlo
    component = <Error message='Ambos campos son obligatorios' />
  } else {
    // Mostrar el clima
    component = null
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
            <div className='col s12 m6'>{component}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
