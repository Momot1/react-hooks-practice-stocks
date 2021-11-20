import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [userStocks, setUserStocks] = useState([])
  const [filter, setFilter] = useState("Tech")
  const [sort, setSort] = useState("")

  function addStockToPortfolio(stock, remove){
    if(remove === false){
      if(userStocks.find(item => item.id===stock.id) === undefined){
        setUserStocks([...userStocks, stock])
      }
    } else{
      const updatedStocks = userStocks.filter(item => item.id !== stock.id)
      setUserStocks(updatedStocks)
    }
  }

  function changeFilter(newFilter){
    setFilter(newFilter)
  }

  function changeSort(newSort){
    setSort(newSort)
  }

  return (
    <div>
      <SearchBar filter={filter} onChangeFilter={changeFilter} onChangeSort={changeSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer onAddPortfolioStock = {addStockToPortfolio} filter={filter} sort={sort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={userStocks} onAddPortfolioStock = {addStockToPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
