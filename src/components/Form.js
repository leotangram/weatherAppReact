import React, { useState } from 'react'

function Form({ queryData }) {
  // State del componente
  // search = state, setSearch = setState({})
  const [search, setSearch] = useState({
    city: '',
    country: ''
  })

  const handleChange = e => {
    // cambiar el state
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const checkWeather = e => {
    e.preventDefault()
    // Pasar hacia el componente principal la búsqueda del usuario
    queryData(search)
  }

  return (
    <form onSubmit={checkWeather}>
      <div className='input-field col s12'>
        <input type='text' name='city' id='city' onChange={handleChange} />
        <label htmlFor='city'>Ciudad:</label>
      </div>
      <div className='input-fiel col s12'>
        <select onChange={handleChange} name='country'>
          <option value=''>-- Selecciona un país --</option>
          <option value='US'>Estados Unidos</option>
          <option value='MX'>México</option>
          <option value='CO'>Colombia</option>
          <option value='AR'>Argentina</option>
          <option value='CR'>Costa Rica</option>
          <option value='ES'>España</option>
          <option value='PE'>Perú</option>
          <option value='UK'>Reino Unido</option>
        </select>
      </div>
      <div className='input-field col s12'>
        <input
          type='submit'
          value='Buscar clima'
          className='waves-effect waves-light btn-large btn-block yellow accent-4'
        />
      </div>
    </form>
  )
}

export default Form
