import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [dog, setDog] = useState();
  const [compare, setCompare] = useState("");
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchDogsData();
  }, []);

  // For fetching dog image first time
  const fetchDogsData = async () => {
    await fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDog(data.message);
      });
  };

  // for clicking on next button ->

  const fetchNextImage = async () => {
    // for random image
    
    if(compare === 'random' || compare ===""){
      console.log('from function')
      await fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDog(data.message);
      });
    }else{
      await fetch(`https://dog.ceo/api/breed/${compare}/images/random`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDog(data.message);
      });
    }
  };

  const getDogBreed = (e) => {
    console.log(e.target.value);
    setCompare(e.target.value);
  };
  
  

  
  return (
    <>
      <div className="container">
        <div>
          <label htmlFor="dogs">Select a breed: </label>
          <select
            id="dogs"
            onChange={(e) => {
              getDogBreed(e);
            }}
          >
            <option value="random">random</option>
            <option value="beagle">beagle</option>
            <option value="boxer">boxer</option>
            <option value="dalmatian">dalmatian</option>
            <option value="husky">husky</option>
          </select>
        </div>
        {/* dog image */}
        <div>
          <img src={dog} height={400} width={300} alt="dog" />
        </div>
        <button value="next" onClick={fetchNextImage}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
