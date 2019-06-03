import React from 'react'

function Form() {
  const handleChange = e => {
    // cambiar el state
     
  }

  return (
    <form>
      <div className='input-field col s12'>
        <input type='text' name='city' id='city' onChange={handleChange} />
        <label htmlFor="city">Ciudad:</label>
      </div>
      <div className='input-fiel col s12'>
        <select onChange={handleChange} name="country">
          <option value="">-- Selecciona un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="CO">Colombia</option>
          <option value="AR">Argentina</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input type="submit" value="Buscar clima" className="waves-effect waves-light btn-large btn-block yellow accent-4"/>
      </div>
    </form>
  )
}

export default Form
