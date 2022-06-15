import React, { useState, useEffect } from 'react'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Card from './components/Cards/Card';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episode from './Pages/Episode';
import Location from './Pages/Location';


function App () {
  return (
    <Router>
      <div className='App'>
      <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='episodes' element={<Episode/>}/>
        <Route path='Location' element={<Location/>}/>
      </Routes>
    </Router>
  )
}

const Home = () => {

let [search, setsearch] = useState('')
let [pageNumber, setpageNumber] = useState(1)
let [fetchData, updateFetchData] = useState ([])
let {info, results} = fetchData


// the RESULTS we go to using for the fetch the information in the card component

let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

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
    
    
        <Search setpageNumber={setpageNumber} setsearch = {setsearch}/>
      <div className='container'>
        <div className='row'>
          <div  style={{width:'17%'}} className='col-3'>
         
          </div>
          <div className='col-lg-8 col-12'>
            <div className='row'>
             <Card results= {results}/>
            </div>
          </div>

        </div>
       </div>
      <Pagination
       info= {info} 
       pageNumber={pageNumber} 
       setpageNumber= {setpageNumber}
       /> 
    </div>
  );
}

export default App;
