import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Error from './components/Error'

function App() {
  // State principal
  // city = state, setCity = this.setState({})
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [error, setError] = useState(false)
  const [result, setResult] = useState({})

  useEffect(() => {
    // Prevenir ejecución por primera vez
    if (city === '') return
    const consultAPI = async () => {
      const appId = '0e7f3b8a887b8a3da9f8d0f3d6b94411'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
      const response = await fetch(url)
      const result = await response.json()
      setResult(result)
    }
    consultAPI()
  }, [city, country])

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
