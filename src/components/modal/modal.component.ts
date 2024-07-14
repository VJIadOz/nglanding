import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Options } from "../../shared/charts-options";

@Component({
  selector: 'modal-bar-chart',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  imports: [ChartModule, DialogModule]
})

export class ModalComponent implements OnInit {
  chartDataLabelsPlugin = ChartDataLabels

  @Input() visible!: boolean
  @Output() visibleChange = new EventEmitter<boolean>()


  metadataBar!: any
  optionsBar!: any
  labelInside!: { department: string, percents: string }
  colors: Array<string> = ["--chart-color-2", "--chart-color-1", "--chart-color-3", "--chart-color-4"]

  getColor(simpleColor: string) {
    const documentStyle = getComputedStyle(document.documentElement);
    switch (simpleColor) {
      case "red":
        return documentStyle.getPropertyValue('--chart-color-2')
      case "orange":
        return documentStyle.getPropertyValue('--chart-color-1')
      case "green":
        return documentStyle.getPropertyValue('--chart-color-3')
      case "pink":
        return documentStyle.getPropertyValue('--chart-color-6')
      case "darkCyan":
        return documentStyle.getPropertyValue('--chart-color-4')
      case "lightCyan":
        return documentStyle.getPropertyValue('--chart-color-5')
      case "blue":
        return documentStyle.getPropertyValue('--chart-color-7')
    }
    return this.colors[Math.floor(Math.random() * this.colors.length)]
  }

  ngOnInit(): void {
    this.metadataBar = {
      labels: ["ОКТ", "КЛГ", "МОСК", "ГОРЬК", "СЕВ", "С-КАВ", "Ю-ВОСТ", "ПРИВ", "КБШ", "СВЕРД", "Ю-УР", "З-СИБ", "КРАС", "В-СИБ", "ЗАБ", "Д-ВОСТ"],
      datasets: [
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
          data: [10, 30, 40, 30, 25, 25, 25, 30, 30, 20, 20, 30, 30, 20, 40, 25],
          backgroundColor: [
            this.getColor("green"), this.getColor("orange"), this.getColor("green"), this.getColor("red"),
            this.getColor("orange"), this.getColor("darkCyan"), this.getColor("orange"), this.getColor("green"),
            this.getColor("red"), this.getColor("green"), this.getColor("orange"), this.getColor("red"),
            this.getColor("darkCyan"), this.getColor("darkCyan"), this.getColor("darkCyan"), this.getColor("orange"),
            this.getColor("green")
          ],
          barThickness: 30
        }
      ]
    }

    this.optionsBar = {
      responsive: true,
      maintainAspectRatio: false,
      // aspectRatio: 2,
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
