import React, { Component } from 'react'
import Loading from './Loading.gif'

const Spinner = (props) =>  {
    return (
      <div className="text-center">
          <img className="my-3" src={Loading} alt="Loading" />
      </div>
    )
}

export default Spinner