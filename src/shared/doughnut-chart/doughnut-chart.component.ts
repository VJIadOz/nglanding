import { Component, Input, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { Options } from "../../shared/charts-options";


@Component({
  selector: 'main-doughnut-chart',
  standalone: true,
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css',
  imports: [ChartModule]
})
export class DoughnutChartComponent implements OnInit {
  @Input() data!: {label: {department: string, percents: string}, labels: Array<string>, datasets: Array<{data: Array<number>}>}
  metadata!: {labels: Array<string>, datasets: Array<{data: Array<number>}>}
  options!: Options
  labelInside!: {department: string, percents: string}

  ngOnInit(): void {
    this.labelInside = {
      department: this.data.label.department,
      percents: this.data.label.percents
    }
    const documentStyle = getComputedStyle(document.documentElement);
    this.metadata = {
      labels: this.data.labels,
      datasets: (this.data.datasets).map((item: any) => (
        {
          data: item.data,
          backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--cyan-600'), documentStyle.getPropertyValue('--orange-500')],
          borderWidth: 0,
        })
      )
    }

    this.options = {
      cutout: '85%',
      plugins: {
        legend: { display: false },
      }
    }
  }
}
