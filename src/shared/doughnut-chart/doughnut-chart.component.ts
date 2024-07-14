import { Component, Input, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Options } from "../../shared/charts-options";
import { ModalComponent } from "../../components/modal/modal.component";



@Component({
  selector: 'main-doughnut-chart',
  standalone: true,
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css',
  imports: [ChartModule, ButtonModule, DialogModule, ModalComponent]
})
export class DoughnutChartComponent implements OnInit {
  modalVisible: boolean = false

  @Input() data!: { label: { department: string, percents: string }, labels: Array<string>, datasets: Array<{ data: Array<number> }> }
  metadata!: { labels: Array<string>, datasets: Array<{ data: Array<number> }> }
  options!: any
  labelInside!: { department: string, percents: string }

  ngOnInit(): void {
    this.labelInside = {
      department: this.data.label.department,
      percents: this.data.label.percents
    }
    const documentStyle = getComputedStyle(document.documentElement);
    this.metadata = {
      labels: this.data.labels,
      datasets: (this.data.datasets).map((item: { data: Array<number> }) => (
        {
          data: item.data,
          backgroundColor: [documentStyle.getPropertyValue('--chart-color-2'), documentStyle.getPropertyValue('--chart-color-3'), documentStyle.getPropertyValue('--chart-color-4'), documentStyle.getPropertyValue('--chart-color-1')],
          borderWidth: 0,
        })
      )
    }

    this.options = {
      rotation: -5,
      responsive: true,
      aspectRatio: 1,
      cutout: '85%',
      plugins: {
        legend: { display: false },
      }
    }

  }
}
