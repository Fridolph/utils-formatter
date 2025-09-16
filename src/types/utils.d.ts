type GetDecimalPlacesOptions = {
  // 若没取到使用的小数位数，默认为 0
  defaultDecimal: number
  // 运算时的最大精度，defaultDecimalConfigs 的 precision，参考 decimal.js 文档
  maxDecimal: number
}
