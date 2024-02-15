import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = value => {
    const {balance} = this.state
    this.setState({balance: balance - value})
  }

  render() {
    const {balance} = this.state

    const {denominationsList} = this.props

    return (
      <div className="widthdrawal-container">
        <div className="profile-container">
          <div className="profilt-img">S</div>
          <h1 className="user-name">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <h1 className="your-balance">Your Balance</h1>
          <div className="account-balance">
            <h1 className="balance">{balance}</h1>
            <p className="inrupees-desc">In Rupees</p>
          </div>
        </div>
        <h1 className="widthdraw-heading">Withdraw</h1>
        <p className="withdraw-des">CHOOSE SUM (IN RUPEES)</p>
        <div className="denomination-container">
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              denominationItems={each}
              withdrawAmount={this.withdrawAmount}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
