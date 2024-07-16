export function getColor(simpleColor: string) {
  const documentStyle = getComputedStyle(document.documentElement);
  switch (simpleColor) {
    case "red":
      return documentStyle.getPropertyValue('--chart-color-2')
    case "orange":
      return documentStyle.getPropertyValue('--chart-color-1')
    case "green":
      return documentStyle.getPropertyValue('--chart-color-3')
    case "pink":
      return documentStyle.getPropertyValue('--chart-color-6')
    case "darkCyan":
      return documentStyle.getPropertyValue('--chart-color-4')
    case "lightCyan":
      return documentStyle.getPropertyValue('--chart-color-5')
    case "blue":
      return documentStyle.getPropertyValue('--chart-color-7')
    default:
      return "#000"
  }
}
