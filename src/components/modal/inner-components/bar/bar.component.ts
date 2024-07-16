import { Component, Input, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { Options } from "../../../../shared/charts-options"
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { getColor } from "../../../../shared/getColor";


@Component({
  selector: 'modal-bar-chart',
  standalone: true,
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
  imports: [ChartModule]
})
export class ModalBarChartComponent implements OnInit {
  chartDataLabelsPlugin = ChartDataLabels

  @Input() data!: { labels: Array<string>, datasets: Array<{ data: Array<number> }> }
  metadata!: { labels: Array<string>, datasets: Array<{ data: Array<number> }> }
  options!: Options
  labelInside!: { department: string, digits1: number, digits2: number }

  ngOnInit(): void {


    this.metadata = {
      labels: this.data.labels,
      datasets: (this.data.datasets).map((item: { data: Array<number> }) => (
        {
          datalabels: {
            display: true,
            anchor: 'center',
            offset: 10,
            color: '#000',
            font: {
              size: 10
            }
          },
          data: item.data,
          backgroundColor: [
            getColor("green"), getColor("orange"), getColor("green"), getColor("red"),
            getColor("orange"), getColor("darkCyan"), getColor("orange"), getColor("green"),
            getColor("red"), getColor("green"), getColor("orange"), getColor("red"),
            getColor("darkCyan"), getColor("darkCyan"), getColor("darkCyan"), getColor("orange"),
            getColor("green")
          ],
          barThickness: 30
        })
      )
    }

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          ticks: {
            align: "center",
            color: "#fff",
            font: {
              size: 12
            }
          },
          grid: {
            color: "#939393",
            drawTicks: false
          },
          border: {
            display: false
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: "#939393",

          },
          border: {
            display: false
          }
        }
      }
    }

  }
}
