import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [covid7Days, setCovid7Days] = useState(0)

  useEffect(() => {
    axios.get("https://covid.ourworldindata.org/data/latest/owid-covid-latest.json")
      .then((response) => {
        const arr = Object.values(response.data);
        const map = arr.map((arr) => arr.new_cases_smoothed);
        const initialValue = 0;
        const last7Days = map.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue,
        );
          setCount(last7Days)
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(covid7Days)



  
  return (
   <h1>Hello world</h1>
  )
}

export default App
