export interface Options {
  cutout?: string,
  pointStyle?: boolean,
  plugins?: {
    legend?: {
      display?: boolean
    }
  },
  responsive?: boolean,
  aspectRatio?: number,
  maintainAspectRatio?: boolean,
  scales?: {
    x?: {
      stacked?: boolean,
      ticks?: {
        color?: string,
      },
      grid?: {
        display?: boolean
      },
      border?: {
        display?: boolean
      }
    },
    y?: {
      stacked?: boolean,
      labels?: {
        show?: boolean,
        fontColor?: string,
        fontSize?: number,
        padding?: number
      }
      ticks?: {
        color?: string,
        stepSize?: number,
        display?: boolean
      },
      grid?: {
        color?: string,
        display?: boolean
      },
      border?: {
        display?: boolean
      }
    }
  }
}
