import { Component, Input, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { Options } from "../charts-options";
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { getColor } from "../getColor";


@Component({
  selector: 'main-bar-chart',
  standalone: true,
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
  imports: [ChartModule]
})

export class BarChartComponent implements OnInit {
  chartDataLabelsPlugin = ChartDataLabels

  @Input() data!: { labels: Array<string>, datasets: Array<{ data: Array<number> }> }
  metadata!: { labels: Array<string>, datasets: Array<{ data: Array<number> }> }
  options!: Options
  colors: Array<string> = ["red", "orange", "green", "darkCyan"]

  ngOnInit(): void {
    this.metadata = {
      labels: this.data.labels,
      datasets: (this.data.datasets).map((item: { data: Array<number> }, index: number) => (
        {
          datalabels: {
            display: true,
            align: '-15',
            anchor: 'start',
            offset: 10,
            color: '#fff',
            font: {
              size: 10
            }
          },
          data: item.data,
          type: "bar",
          backgroundColor: getColor(this.colors[index]),
          barThickness: 16,
        })
      )
    }

    this.options = {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            align: "start",
            labelOffset: -10,
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
          stacked: true,
          ticks: {
            display: false
          },
          grid: {
            display: false
          },
          border: {
            display: false
          }
        }
      }
    }
  }

}




