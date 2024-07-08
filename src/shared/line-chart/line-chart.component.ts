import { Component, Input, OnInit} from "@angular/core";
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'main-line-chart',
  standalone: true,
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
  imports: [ChartModule]
})
export class LineChartComponent implements OnInit {
  @Input() data: any
  metadata: any
  options: any = {}
  labelInside: any = {}

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




