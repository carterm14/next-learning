import Link from 'next/link'
import stockStyles from '../styles/Stock.module.css'

const StockItem = ({stock}) => {
  return (
    <Link href="/stock/[symbol]" as={`/stock/${stock.symbol}`}>
      <a className={stockStyles.card}>
        <h3>{stock.symbol}</h3>
        {
          stock.image && 
          <div className={stockStyles.image}>
            <img src={stock.image} alt={stock.symbol} />
          </div>
        }
      </a>
    </Link>
  )
}

export default StockItem
