import './index.css'

const DenominationItem = props => {
  const {denominationItems, withdrawAmount} = props
  const {id, value} = denominationItems

  const onWithdrawal = () => {
    withdrawAmount(value)
  }

  return (
    <button className="button" onClick={onWithdrawal}>
      {value}
    </button>
  )
}

export default DenominationItem
