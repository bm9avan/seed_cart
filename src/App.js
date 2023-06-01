import { useReducer } from 'react';
import './App.css';
import Header from './components/headerFooter/Header';
import Seeds from './components/seeds-body/Seeds';

function App() {
  const [cartDataState, dispatch] = useReducer((prevData, action) => {
    let i = -1;
    let newData = prevData.filter((eachItem) => {
      if (eachItem.title === action.title) {
        console.log('before', eachItem.qty, typeof(eachItem.qty))
        i = 1
        eachItem.qty += action.qty
        console.log('befire after', eachItem.qty, typeof (eachItem.qty))
        eachItem.qty = eachItem.qty <= 5 ? eachItem.qty : 5
        console.log('after', eachItem.qty)
      }
      return eachItem
    })
    console.log('before')
    if (i > 0) {
      return [...newData]
    }
    return [...prevData, action]
  }, [])

  function cartDataHandler(newItem) {
    dispatch(newItem)
  }

  return (
    <div className="App">
      <Header cartData={cartDataState} />
      <Seeds onAddingToCart={cartDataHandler} />
    </div>
  );
}

export default App;