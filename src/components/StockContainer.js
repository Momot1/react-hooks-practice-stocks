import React, {useState, useEffect} from "react";
import Stock from "./Stock";

function StockContainer({onAddPortfolioStock, filter, sort}) {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(resp => resp.json())
      .then(data => setStocks(data))
  }, [])

  function comparePrice(a,b){
    if(a.price < b.price){
      return -1
    } else if(a.price > b.price){
      return 1
    } else{
      return 0
    }
  }

  function compareAlphabetically(a,b){
    if(a.name < b.name){
      return -1
    } else if(a.name >b.name){
      return 1
    } else{
      return 0
    }
  }

  let sortedStocks = []

  if(sort === "Price"){
    sortedStocks = (stocks.sort(comparePrice))
  } else if(sort === "Alphabetically"){
    sortedStocks = (stocks.sort(compareAlphabetically))
  } else{
    sortedStocks = [...stocks]
  }

  const stockElements = 
    sortedStocks
      .filter(stock => stock.type === filter ? stock : null)
      .map(stock => <Stock key={stock.id} stock={stock} onAddPortfolioStock={onAddPortfolioStock}/> )

  return (
    <div>
      <h2>Stocks</h2>
      {stockElements}
    </div>
  );
}

export default StockContainer;
