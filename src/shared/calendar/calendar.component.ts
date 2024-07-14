import { Component, OnInit  } from "@angular/core";
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  imports: [FormsModule, CalendarModule],
  styleUrl: './calendar.component.css'
})
export class CalendarComponent{
  date: Date = new Date();
}
