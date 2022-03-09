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

  function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  function covidPrediction(n) {
    var covidNewCases = [],
      a = covid7Days,
      b = totalCases;

    if (n < 1) {
      console.log("por favor insira um valor valido");
    } else if (n > 9) {
      console.log("por favor insira um valor valido");
    } else if (isFloat(n)) {
      console.log("Você precisa inserir um numero inteiro");
    } else {
      for (var k = 0; k < n; k++) {
        covidNewCases.push({ dia: 1 * k, casos: b + a * Math.pow(2, 1 * k) });
      }
      setPrediction(covidNewCases);
    }
  }

  covidPrediction(8.2);

  return (
    <>
      <div className="Container">
        <div>
          <h1>Previsão Média do Contagio de COVID-19</h1>

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
          <ol className="ItemsContainer">
            {prediction.map(({ casos }) => {
              return (
                <li>
                  <span>Dia</span> <span>{numberWithCommas(casos)}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
