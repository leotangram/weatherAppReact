import React from 'react'

function Error({message}) {
  return (
    <div className="card-panel red arken-4 error col s12">
      {message}
    </div>
  )
}

export default Error