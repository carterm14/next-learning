export default async function handler({ query: { symbol } }, res) {
  const response = await fetch(`https://universal.hellopublic.com/exercises/stocks.json`)
  const { stocks } = await response.json()
  const filtered = stocks.filter(stock => stock.symbol === symbol)
  if(filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Stock with symbol of ${symbol} is not found` })
  }
}