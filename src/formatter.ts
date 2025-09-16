import Currency from "currency.js"

interface CurrencySettings {
  symbol?: string
  separator?: string
  decimal?: string
  format?: string
  precision?: number
  pattern?: string
  negative?: string
  negativePattern?: string
}

const defaultCurrencyDefaults = {
  decimal: '.',
  separator: ',',
  precision: 2,
  negative: '-',
  pattern: '!#',
}

export default class Formatter {
  private static instance: Formatter
  private constructor() {
    
  }

  public static getInstance(): Formatter {
    if (!Formatter.instance) {
      Formatter.instance = new Formatter()
    }
    return Formatter.instance
  }

  public formatMoney(originNumber: string | number, userOptions?: CurrencySettings) {
    return Currency(originNumber).format()
  }
}

export const FormatInst = Formatter.getInstance()