// Write your JS code here

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currenciesList: [],
  }

  componentDidMount() {
    this.getCurrenciesData()
  }

  getCurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({
      currenciesList: formattedData,
    })
  }

  render() {
    const {currenciesList} = this.state
    return (
      <div>
        <h1 className="cryptocurrency-tracker-heading">
          Cryptocurrency Tracker
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-bg-image"
        />
        <div className="currencies-container">
          <div className="currencies-header">
            <h1 className="header-heading">Coin Type</h1>
            <div className="conversion-container">
              <h1 className="header-heading">USD</h1>
              <h1 className="header-heading">EURO</h1>
            </div>
          </div>
          {currenciesList.map(eachCurrency => (
            <CryptocurrencyItem
              currencyData={eachCurrency}
              key={eachCurrency.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
