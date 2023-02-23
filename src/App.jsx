import React, { useState, useEffect } from "react";
import './App.css'
import { Display } from './components/display';
import { SelectCurrency } from './components/selectCurrency';

function App() {
  const [dolarPrice, setDolarPrice] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.bcb.gov.br/dados/serie/bcdata.sgs.1/dados/ultimos/1?formato=json"
      );
      const data = await response.json();
      setDolarPrice(data[0].valor);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <Display dolarPrice={dolarPrice}/>
      <SelectCurrency/>
      <SelectCurrency/>
      </div>
    </div>

  )
}

export default App
