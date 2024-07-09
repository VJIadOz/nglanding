import { Component, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { CalendarComponent } from "../../shared/calendar/calendar.component";
import { DoughnutChartComponent } from "../../shared/doughnut-chart/doughnut-chart.component";
import { LineChartComponent } from "../../shared/line-chart/line-chart.component";
import { Options } from "../../shared/charts-options";


@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [CalendarComponent, DoughnutChartComponent, ChartModule, LineChartComponent]
})
export class MainComponent implements OnInit {
  chartsDepartmentData!: Array<{ label: { department: string, percents: string }, labels: Array<string>, datasets: Array<{ data: Array<number> }> }>

  chartsRoadData!: { labels: Array<string>, datasets: Array<{ colorLine: string, data: Array<number> }> }

  chartsRedZone!: { labels: Array<string>, datasets: Array<{ borderColor: string, data: Array<number> }> }
  chartsRedOptions!: Options

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);

    this.chartsDepartmentData = [
      {
        label: {
          department: "РЖД",
          percents: "65%"
        },
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          data: [250, 280, 190, 280],
        }]
      },
      {
        label: {
          department: "ЦДМВ",
          percents: "65%"
        },
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          data: [250, 280, 190, 280]
        }]
      },
      {
        label: {
          department: "ЦД",
          percents: "65%"
        },
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          data: [250, 280, 190, 280]
        }]
      },
      {
        label: {
          department: "ЦДИ",
          percents: "65%"
        },
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          data: [250, 280, 190, 280]
        }]
      },
      {
        label: {
          department: "ЦТ",
          percents: "65%"
        },

        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          data: [250, 280, 190, 280]
        }]

      },
      {
        label: {
          department: "ЦДРП",
          percents: "65%"
        },

        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          data: [250, 280, 190, 280]
        }]

      },
      {
        label: {
          department: "ЦФТО",
          percents: "65%"
        },
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          data: [250, 280, 190, 280]
        }]
      },
      {
        label: {
          department: "ДОСС",
          percents: "65%"
        },
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          data: [250, 280, 190, 280]
        }]
      }
    ]

    this.chartsRoadData = {
      labels: ["ОКТ", "КЛГ", "МОСК", "ГОРЬК", "СЕВ", "С-КАВ", "Ю-ВОСТ", "ПРИВ", "КБШ", "СВЕРД", "Ю-УР", "З-СИБ", "КРАС", "В-СИБ", "ЗАБ", "Д-ВОСТ"],
      datasets: [
        {
          colorLine: documentStyle.getPropertyValue('--red-500'),
          data: [10, 30, 40, 30, 25, 25, 25, 30, 30, 20, 20, 30, 30, 20, 40, 25],
        },
        {
          colorLine: documentStyle.getPropertyValue('--orange-500'),
          data: [20, 40, 20, 20, 25, 25, 25, 40, 20, 40, 30, 40, 20, 40, 30, 25],
        },
        {
          colorLine: documentStyle.getPropertyValue('--green-500'),
          data: [40, 20, 30, 40, 25, 25, 25, 20, 40, 30, 40, 20, 40, 30, 20, 25],
        },
        {
          colorLine: documentStyle.getPropertyValue('--cyan-600'),
          data: [30, 10, 10, 10, 25, 25, 25, 10, 10, 10, 10, 10, 10, 10, 10, 25],
        }
      ]
    }

    this.chartsRedZone = {
      labels: ['', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', ''],
      datasets: [
        {
          borderColor: 'orange',
          data: [90, 90, 100, 49, 80, 80, 80, 80, 100, 80]
        },
        {
          borderColor: 'green',
          data: [49, 20, 49, 70, 45, 80, 17, 50, 49]
        },
        {
          borderColor: 'red',
          data: [59, 10, 59, 30, 74, 90, 16, 45, 16]
        },
        {
          borderColor: 'cyan',
          data: [91, 20, 49, 91, 54, 30, 29, 40, 29]
        },
        {
          borderColor: 'pink',
          data: [73, 21, 50, 30, 34, 50, 81, 73, 50]
        }
      ]
    }

    this.chartsRedOptions = {
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
            stepSize: 20
          },
          grid: {
            color: "#fff"
          },
          border: {
            display: false
          }
        }
      },
      responsive: true,
      aspectRatio: 4,
    }
  }
}


