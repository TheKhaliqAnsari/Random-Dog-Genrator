import React from 'react';

export default function DogCard({image}) {

    
// async function fetchDogsData(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     let data = await res.json();
//     data = data.message;
//     console.log(data)
//     return data;
    
// }

  return (
    <div className='container'>
      <div>
      <label htmlFor='dogs'>Select a breed: </label>
      <select id='dogs'>
        <option value="random" >random</option>
        <option value="beagle">beagle</option>
        <option value="boxer">boxer</option>
        <option value="dalmatian">dalmatian</option>
        <option value="huskey">huskey</option>
      </select>
      </div>
      {/* dog image */}
      <div>
      <img src={image} height={400} width={300} alt="dog" />

      </div>
      <button value="next">Next</button>
    </div>
  )
}
