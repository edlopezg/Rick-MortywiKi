import React from 'react'
import styles from './Search.module.scss'



const Search = ({setsearch, setpageNumber}) => {
  return (
    <form className='d-flex justify-content-center my-4 gap-4'  >
        <input onChange={(e) => {
            setpageNumber()
            setsearch(e.target.value)
        } } placeholder='Search Character' type='text' className= {styles.input}/>
        <button onClick={(e) => {
            e.preventDefault()
        }} className= {`${styles.btn} btn btn-success fs-5`}>Search</button>
      
    </form>
  )
}

export default Search