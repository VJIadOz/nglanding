import { Component, OnInit } from "@angular/core";
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { CalendarComponent } from "../../shared/calendar/calendar.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [TabMenuModule, CalendarComponent],
  standalone: true
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      { label: 'Доступные вам' },
      { label: 'Избранное' },
      { label: 'Подписки' },
    ]
  }
}
