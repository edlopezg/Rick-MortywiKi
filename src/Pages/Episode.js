import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../components/Cards/Card'
import InputGroup from '../components/Category/InputGroup'

const Episode = () => {
let [getEpisodeId, setgetEpisodeId] = useState(1)  
let [info, setinfo] = useState([])
const [results, setresults] = useState([])
let {air_date, name} = info;

let api =  `https://rickandmortyapi.com/api/episode/${getEpisodeId}`



 
useEffect(() => {
    (async function(){
        let data = await fetch(api).then(res => res.json())
        setinfo(data)
            let c = await Promise.all(data.characters.map((x) => {
                return fetch(x).then((res) => res.json()); 
            }));
            
            setresults(c)
            
    })()
}, [api])




  return (

    <div className='App container'>
     <div className='row mb-4'>
         <h1 className='text-center mb-4'>Episode : <span className='text-success'>{name==='' ? 'unknow' : name} </span> </h1>
         <h5 className='text-center'>Air Data {air_date==='' ? 'unknow' : air_date}</h5>
     </div>
     <div className='row'>
         <div className='col-lg-3 col-12'>
         <h4 className='text-center mb-4'>  Pick Episodes </h4>
         <InputGroup setgetEpisodeId={setgetEpisodeId} name='Episode' total={51}/>
         </div>
       
         <div className='col-lg-8 col-12'> 
         <div className='row'><Card results={results}/></div>
         </div>
     </div>


    </div>
  )
}

export default Episode