import Currency from 'currency.js'

// 定义默认配置接口
interface CurrencyDefaults {
  symbol: string
  separator: string
  decimal: string
  errorOnInvalid: boolean
  precision: number
  pattern: string
  negativePattern: string
  format: (
    currency: Currency,
    settings: Currency.Options | Currency.Format
  ) => string
  fromCents: boolean
}
