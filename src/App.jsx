import { useState, useEffect, useLayoutEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [covid7Days, setCovid7Days] = useState()
  const [totalCases, setTotalCases] = useState(null)
  const [prediction, setPrediction] = useState([])

  

  useEffect(() => {
    axios.get("https://covid.ourworldindata.org/data/latest/owid-covid-latest.json")
      .then((response) => {
        const data = response.data
        const dailyCasesData = data.BRA.new_cases
        const totalCasesData = data.BRA.total_cases
        setTotalCases(totalCasesData)
        setCovid7Days(dailyCasesData)
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(covid7Days)
  console.log(totalCases)



  
  function covidPrediction(n) {
    var covidNewCases = [],
      a = covid7Days,
      b = totalCases;
  
    for (var k = 0; k < n; k++) {
      covidNewCases.push({ dia: 1 * k, casos: b + a * Math.pow(2, 1 * k) });
    }
    setPrediction(covidNewCases);
  }
  
  console.log(prediction)


  


  return (
   <>
   <h1>Hello world</h1>
   <button onClick={() => covidPrediction(7)}>aaaa</button>
   <div style={{backgroundColor: "red", width: "100vw"}} className="users">
      {prediction.map((dia) => (
        <div  className="user">{prediction.dia}</div>
      ))}
    </div>
   </>
  )
}

export default App
