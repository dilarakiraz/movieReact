import React, { useState } from 'react'
import ResultCard from './ResultCard';


const Add = () => {

  const[query,setQuery] = useState("");
  const[results,setResults] = useState([]);
  //console.log(query);

  function onChange(e){
   setQuery(e.target.value)
// e4d71eac5d3f1a72564a09ad457e7bfd
   fetch(`
   https://api.themoviedb.org/3/search/movie?api_key=e4d71eac5d3f1a72564a09ad457e7bfd&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
   .then((res)=>res.json())
   .then((data)=>setResults(data.results));
  }

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" alt="" />
          <div className='titles'>
            <h1>Hoş Geldiniz</h1>
            <h2>Türkiye'nin en iyi film sitesi</h2> 
          </div>
          <div className='input-wrapper'>
            <input 
            type="text" 
            value={query}
            onChange={onChange} 
            placeholder='Film ara..'></input>
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
};

export default Add;