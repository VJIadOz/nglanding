import { Component, Input, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { Options } from "../../../../shared/charts-options"
import { getColor } from "../../../../shared/getColor";


@Component({
  selector: 'modal-doughnut-chart',
  standalone: true,
  templateUrl: './doughnut.component.html',
  styleUrl: './doughnut.component.css',
  imports: [ChartModule]
})
export class ModalDoughnutChartComponent implements OnInit {
  @Input() data!: {
    label: { department: string, digits1: number, digits2: number },
    labels: Array<string>,
    datasets: Array<{data: Array<number>}>
  }
  metadata!: {
    labels: Array<string>,
    datasets: Array<{
      hoverBorderWidth: number,
      hoverBorderColor: Array<string>,
      borderWidth: number,
      data: Array<number>,
      backgroundColor: Array<string>
    }>
  }
  options!: Options
  labelInside!: { department: string, digits1: number, digits2: number }

  ngOnInit(): void {

    this.labelInside = {
      department: this.data.label.department,
      digits1: this.data.label.digits1,
      digits2: this.data.label.digits2,
    }

    this.metadata = {
      labels: this.data.labels,
      datasets: (this.data.datasets).map((item: { data: Array<number> }) => (
        {
          hoverBorderWidth: 3,
          hoverBorderColor: [getColor("red") + "B0", getColor("green") + "B0", getColor("darkCyan") + "B0", getColor("orange") + "B0"],
          borderWidth: 0,
          data: item.data,
          backgroundColor: [getColor("red"), getColor("green"), getColor("darkCyan"), getColor("orange")]
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
