import { useState } from 'react';
import './App.css';
import Header from './components/headerFooter/Header';
import Seeds from './components/seeds-body/Seeds';

function App() {
  const [cartData, setCartdata] = useState([])
  function cartDataHandler(newItem) {
    setCartdata((prevData) => {
      let i = -1;
      let newData = prevData.filter((eachItem) => {
        if (eachItem.title === newItem.title) {
          i = 1
          eachItem.qty += newItem.qty
          eachItem.qty = eachItem.qty < 5 ? eachItem.qty : 5
        }
        return eachItem
      })
      if (i > 0) {
        return [...newData]
      }
      return [...prevData, newItem]
    })
  }
  return (
    <div className="App">
      <Header cartData={cartData} />
      <Seeds onAddingToCart={cartDataHandler} />
    </div>
  );
}

export default App;