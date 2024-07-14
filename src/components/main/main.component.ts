import { Component, OnInit } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { CalendarComponent } from "../../shared/calendar/calendar.component";
import { DoughnutChartComponent } from "../../shared/doughnut-chart/doughnut-chart.component";
import { BarChartComponent } from "../../shared/bar-chart/bar-chart.component";
import { LineChartComponent } from "../../shared/line-chart/line-chart.component";
import { Options } from "../../shared/charts-options";


@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [CalendarComponent, DoughnutChartComponent, ChartModule, BarChartComponent, LineChartComponent]
})

export class MainComponent implements OnInit {
  chartsDepartmentData!: Array<{ label: { department: string, percents: string }, labels: Array<string>, datasets: Array<{ data: Array<number> }> }>

  chartsRoadData!: { labels: Array<string>, datasets: Array<{data: Array<number> }> }

  chartsRedZone!: { labels: Array<string>, datasets: Array<{ data: Array<number> }> }
  chartsRedOptions!: Options

  ngOnInit(): void {

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
          data: [10, 30, 40, 30, 25, 25, 25, 30, 30, 20, 20, 30, 30, 20, 40, 25],
        },
        {
          data: [20, 40, 20, 20, 25, 25, 25, 40, 20, 40, 30, 40, 20, 40, 30, 25],
        },
        {
          data: [40, 20, 30, 40, 25, 25, 25, 20, 40, 30, 40, 20, 40, 30, 20, 25],
        },
        {
          data: [30, 10, 10, 10, 25, 25, 25, 10, 10, 10, 10, 10, 10, 10, 10, 25],
        }
      ]
    }

    this.chartsRedZone = {
      labels: ['', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', ''],
      datasets: [
        {
          data: [90, 90, 100, 49, 80, 80, 80, 80, 100, 80]
        },
        {
          data: [49, 0, 49, 70, 45, 80, 17, 50, 49]
        },
        {
          data: [59, 56, 59, 30, 74, 90, 66, 45, 16]
        },
        {
          data: [91, 78, 49, 91, 54, 30, 29, 30, 29]
        },
        {
          data: [73, 30, 50, 30, 34, 50, 81, 73, 50]
        }
      ]
    }
  }
}


