import { Component, Input, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { Options } from "../charts-options";
import { getColor } from "../getColor";

@Component({
  selector: 'main-line-chart',
  standalone: true,
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
  imports: [ChartModule]
})

export class LineChartComponent implements OnInit {
  @Input() data!: { labels: Array<string>, datasets: Array<{ data: Array<number> }> }
  metadata!: { labels: Array<string>, datasets: Array<{ data: Array<number>, borderColor: string }> }
  options!: Options
  colors: Array<string> = ["red", "orange", "green", "lightCyan", "pink"]

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    this.metadata = {
      labels: this.data.labels,
      datasets: (this.data.datasets).map((item: { data: Array<number> }, index: number) => (
        {
          data: item.data,
          fill:  {
            target: "origin",
            above: getColor(this.colors[index])+"10",
          },
          borderColor: getColor(this.colors[index]),
        })
      )
    }

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      pointStyle: false,
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#fff",
            font: {
              size: 12
            }
          },
          grid: {
            display: false
          },
          border: {
            display: false
          }
        },
        y: {
          ticks: {
            color: "#fff",
            stepSize: 20,
            padding: 10,
            font: {
              size: 14
            }
          },
          grid: {
            color: "#939393",
            drawTicks: false
          },
          border: {
            display: false
          }
        }
      },
    }
  }
}





