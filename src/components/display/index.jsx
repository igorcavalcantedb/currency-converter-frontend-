import React from "react";
export function Display(props) {
  return (
    <div>
      <h2>Preço atual do dólar:</h2>
      <p>{props.dolarPrice ? `R$ ${props.dolarPrice}` : "Carregando..."}</p>
    </div>
  )
}