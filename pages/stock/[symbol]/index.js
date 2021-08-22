import Link from "next/link"
import { useRouter } from "next/router"
import Meta from "../../../components/Meta"
import { server } from "../../../config"

const stock = ({stock}) => {
  return (
    <>
      <h1>{stock.symbol}</h1>
      {
        stock.image && <img src={stock.image} alt={stock.symbol} />
      }
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://universal.hellopublic.com/exercises/stocks.json`)
  const { stocks } = await res.json()
  const stock = stocks.find(stock => stock.symbol === context.params.symbol)
  return {
    props: {
      stock
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://universal.hellopublic.com/exercises/stocks.json`)

  const { stocks } = await res.json()

  const symbols = stocks.map(stock => stock.symbol)
  const paths = symbols.map(symbol => ({
    params: { symbol }
  }))

  return {
    paths,
    fallback: false,
  }
}

export default stock
