import { Component, Input, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { Options } from "../../shared/charts-options";

@Component({
  selector: 'main-line-chart',
  standalone: true,
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
  imports: [ChartModule]
})
export class LineChartComponent implements OnInit {
  @Input() data!: {labels: Array<string>, datasets: Array<{colorLine: string, data: Array<number>}>}
  metadata!: { labels: Array<string>, datasets: Array<{ data: Array<number> }> }
  options!: Options

  ngOnInit(): void {
    this.metadata = {
      labels: this.data.labels,
      datasets: (this.data.datasets).map((item: any) => (
        {
          data: item.data,
          type: "bar",
          backgroundColor: item.colorLine,
          barThickness: 20,
        })
      )
    }

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1.5,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: "#fff"
          },
          grid: {
            display: false
          },
          border: {
            display: false
          }
        },
        y: {
          labels: {
            show: true,
            fontColor: 'black',
            fontSize: 12,
            padding: 5
          },
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




