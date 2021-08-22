import StockList from '../components/StockList'

export default function Home({stocks}) {
  return (
    <div>
      <StockList stocks={stocks} />
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`https://universal.hellopublic.com/exercises/stocks.json`)
  const { stocks } = await res.json()
  return {
    props: {
      stocks
    }
  }
}

