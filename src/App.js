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
        setDog(data.message);
      });
  };

  // for clicking on next button ->

  const fetchNextImage = async () => {
    // for random image
    
    if(compare === 'random' || compare === ""){

      await fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDog(data.message);
      });
    }else{
      await fetch(`https://dog.ceo/api/breed/${compare}/images/random`)
      .then((response) => response.json())
      .then((data) => {
        setDog(data.message);
      });
    }
  };

  const getDogBreed = (e) => {
    setCompare(e.target.value);
  };
  
  

  
  return (
    <>
      <div className="App">
        <div>
          <label htmlFor="dogs" ><span className="main-label">Select a breed: </span></label>
          <select
            id="dogs"
            onChange={(e) => {
              getDogBreed(e);
            }}
            className="options-lable"
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
          <img className="dog-images" src={dog} height={400} width={300} alt="dog" />
        </div>
        <button value="next" onClick={fetchNextImage}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
