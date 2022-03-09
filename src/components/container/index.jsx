import axios from "axios";
import { useState, useEffect, useLayoutEffect } from "react";

import styles from "./container.modules.scss";

export const Container = () => {
  const [covid7Days, setCovid7Days] = useState();
  const [totalCases, setTotalCases] = useState(null);
  const [prediction, setPrediction] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://covid.ourworldindata.org/data/latest/owid-covid-latest.json",
      )
      .then((response) => {
        const data = response.data;
        const dailyCasesData = data.BRA.new_cases;
        const totalCasesData = data.BRA.total_cases;
        setTotalCases(totalCasesData);
        setCovid7Days(dailyCasesData);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(covid7Days);
  console.log(totalCases);

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function covidPrediction(n) {
    var covidNewCases = [],
      a = covid7Days,
      b = totalCases;

    if (n < 1) {
      console.log("por favor insira um valor valido");
    } else if (n > 9) {
      console.log("por favor insira um valor valido");
    } else {
      for (var k = 0; k < n; k++) {
        covidNewCases.push({ dia: 1 * k, casos: b + a * Math.pow(2, 1 * k) });
      }
      setPrediction(covidNewCases);
    }
  }

  return (
    <>
      <div className="Container">
        <div>
          <h1>Hello world</h1>

          <div className="inputContainer">
            <input
              onChange={(event) => covidPrediction(event.target.value)}
              type="number"
              id="number"
              name="number"
              min="0"
              max="9"
              placeholder="Insira a quantidade de dias"
            ></input>
          </div>
          <div className="itemsContainer">
            {prediction.map(({ casos }) => {
              return <h1>{numberWithCommas(casos)}</h1>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
