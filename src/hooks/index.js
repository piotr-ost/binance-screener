import Binance from 'binance-api-node'

export function useClient() {
    const apiKey = process.env.api
    const apiSecret = process.env.secret
    const client = Binance({
        apiKey: apiKey,
        apiSecret: apiSecret
    })
    return client
}

export function getTheme() {
  const d = new Date()
  return d.getHours() > 19  ? 'dark' : 'light'
}
