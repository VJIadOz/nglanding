export interface Options {
  rotation?: number,
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
        labelOffset?: number,
        align?: string,
        color?: string,
        font?: {
          size?: number
        }
      },
      grid?: {
        color?: string,
        display?: boolean,
        drawTicks?: boolean
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
        labelOffset?: number,
        color?: string,
        font?: {
          size?: number
        },
        padding?: number,
        stepSize?: number,
        display?: boolean
      },
      grid?: {
        color?: string,
        display?: boolean,
        drawTicks?: boolean
      },
      border?: {
        display?: boolean
      }
    }
  }
}
