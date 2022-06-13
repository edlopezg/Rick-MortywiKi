import React, { useState, useEffect } from 'react'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Card from './components/Cards/Card';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {

let [search, setsearch] = useState('')
let [pageNumber, setpageNumber] = useState(1)
let [fetchData, updateFetchData] = useState ([])
let {info, results} = fetchData


// the RESULTS we go to using for the fetch the information in the card component

let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`; 

useEffect(() => {
    // i declare a function IIFE JS inmediatly invocation function
    // here we are converting the function in a async function.
    (async function(){
      // whit the function fetch we get the data form the API 
let data = await fetch(api).then(res => res.json());
updateFetchData(data);

    })()

  
}, [api])



  return (
    <div className="App "> 
     <h1 className='text-center ubuntu my-4'>
        Rick & Morty <span className='text-success'> Wiki</span> 
      </h1>
        <Search setpageNumber={setpageNumber} setsearch = {setsearch}/>
      <div className='container'>
        <div className='row'>
         
            <Filters/>
        
          <div className='col-8'>
            <div className='row'>
             <Card results= {results}/>
            </div>
          </div>

        </div>
      </div>
      <Pagination
       info= {info} 
       pageNumber={pageNumber} 
       setpageNumber={setpageNumber}/> 
    </div>
  );
}

export default App;
