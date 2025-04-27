import { useState, useEffect } from 'react'
import './App.css'
import { InputBox } from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  // swap functionality not working correctly
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        convert()
      }}>
        <div>
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectedCurrency={from}
            currencyOptions={options}
            // amountDisabled={false}
          />
        </div>
        <div>
          <button onClick={swap}>
            Swap
          </button>
        </div>
        <div>
          <InputBox
            label="To"
            amount={convertedAmount}
            onAmountChange={(amount) => setConvertedAmount(amount)}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            currencyOptions={options}
            amountDisabled={true}
          />
        </div>
        <button type='submit'>
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </>
  )
}

export default App