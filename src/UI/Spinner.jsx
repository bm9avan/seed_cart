import React from 'react'
import spinner from './loadingSpiner.gif'
import './Spinner.css'

const Spinner = () => {
  return (
    <img src={spinner} alt="spinner" className='spinner' />
  )
}

export default Spinner