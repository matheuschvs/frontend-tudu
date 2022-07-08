export function numberToPercent(value) {
  return Intl.NumberFormat('pt-BR', {
    style: 'percent',
    maximumFractionDigits: 0
  }).format(value)
} 