import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { ModalDoughnutChartComponent } from "./inner-components/doughnut/doughnut.component";
import { ModalBarChartComponent } from "./inner-components/bar/bar.component";
import { Options } from "../../shared/charts-options";

@Component({
  selector: 'modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  imports: [ChartModule, DialogModule, ModalDoughnutChartComponent, ModalBarChartComponent]
})

export class ModalComponent implements OnInit {

  @Input() visible!: boolean
  @Output() changeVisibleModal = new EventEmitter<boolean>()

  metadataDoughnut1!: {label: {department: string, digits1: number, digits2:number}, labels: Array<string>, datasets: Array<{data: Array<number>}>}
  metadataDoughnut2!: {label: {department: string, digits1: number, digits2:number}, labels: Array<string>, datasets: Array<{data: Array<number>}>}

  metadataBar1!: {labels: Array<string>, datasets: Array<{data: Array<number>}>}
  metadataBar2!: {labels: Array<string>, datasets: Array<{data: Array<number>}>}

  ngOnInit(): void {

    this.metadataDoughnut1 = {
      label: {
        department: "ЦП",
        digits1: 49,
        digits2: 36
      },
      labels: ['A', 'B', 'C', 'D'],
      datasets: [{
        data: [250, 280, 190, 280],
      }]
    }

    this.metadataDoughnut2 = {
      label: {
        department: "ЦП",
        digits1: 89,
        digits2: 36
      },
      labels: ['A', 'B', 'C', 'D'],
      datasets: [{
        data: [250, 280, 190, 280],
      }]
    }

    this.metadataBar1 = {
      labels: ["ОКТ", "КЛГ", "МОСК", "ГОРЬК", "СЕВ", "С-КАВ", "Ю-ВОСТ", "ПРИВ", "КБШ", "СВЕРД", "Ю-УР", "З-СИБ", "КРАС", "В-СИБ", "ЗАБ", "Д-ВОСТ"],
      datasets: [
        {
          data: [10, 30, 15, 30, 25, 25, 25, 30, 30, 20, 20, 30, 30, 20, 10, 25],
        }
      ]
    }

    this.metadataBar2 = {
      labels: ["ОКТ", "КЛГ", "МОСК", "ГОРЬК", "СЕВ", "С-КАВ", "Ю-ВОСТ", "ПРИВ", "КБШ", "СВЕРД", "Ю-УР", "З-СИБ", "КРАС", "В-СИБ", "ЗАБ", "Д-ВОСТ"],
      datasets: [
        {
          data: [10, 30, 10, 30, 25, 25, 25, 30, 30, 20, 20, 30, 30, 20, 25, 25],
        }
      ]
    }


  }
}
