// Write your JS code here

import {Component} from 'react'

import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {currencyData} = this.props
    const {currencyName, usdValue, euroValue, currencyLogo} = currencyData
    return (
      <div className="currency-info-container">
        <div className="currency-name-container">
          <img
            src={currencyLogo}
            alt={currencyName}
            className="currency-logo"
          />
          <p className="currency-name">{currencyName}</p>
        </div>
        <div className="currency-converter-container">
          <p className="currency-value">{usdValue}</p>
          <p className="currency-value">{euroValue}</p>
        </div>
      </div>
    )
  }
}

export default CryptocurrencyItem
