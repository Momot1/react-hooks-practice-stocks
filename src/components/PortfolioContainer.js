import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onAddPortfolioStock }) {
  const stocksElements = stocks.map(stock => <Stock stock={stock} key={stock.name + stock.id} remove={true} onAddPortfolioStock = {onAddPortfolioStock}/> )

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stocksElements
      }
    </div>
  );
}

export default PortfolioContainer;
