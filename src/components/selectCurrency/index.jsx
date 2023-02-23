import React from "react";
import './style.css';
export function SelectCurrency(props) {
  return (
    <div className="egcv">
      <input className="lWzCpb ZEB7Fb" value="1" aria-label="Campo do montante da moeda" type="number" />
      <div className="xNzW0d" >
        <div className="aURkK"></div>
        <select name="cars" id="cars">
          <option value="USD">Dólar americano (USD)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">Libra esterlina (GBP)</option>
          <option value="JPY">Iene japonês (JPY)</option>
          <option value="BRL">Real brasileiro (BRL)</option>
        </select>
      </div>
    </div>
  )
}