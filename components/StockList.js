import stockStyles from '../styles/Stock.module.css'
import StockItem from './StockItem.js'

const StockList = ({stocks}) => {
  return (
    <div className={stockStyles.grid}>
      {stocks.map((stock, i) => (
        <StockItem key ={i} stock={stock} />
      ))}
    </div>
  )
}

export default StockList
 