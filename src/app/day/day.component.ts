import { Component, OnInit, ViewChild } from '@angular/core';
import { DayService } from './day.service';
import { MatTable, MatDialog, MatDivider, MAT_DIALOG_DATA} from '@angular/material';
import { day } from './day.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['day.component.scss'],
  providers: [
    DayService,
  ]
})

export class DayComponent implements OnInit {

  dayList: any;
  selectedDay: any;
  showDetails = false;
  showEdit = false;
  displayedMealColumns = ['date','mealSlots'];
  dialogData: any;

  @ViewChild('mealTable') mealTable: MatTable<any>;

  constructor(private _dayService: DayService,
              //private _mealService: MealService,
              public dialog: MatDialog)
  { }

  ngOnInit() {
    this._dayService.list().subscribe(dayList  => this.dayList = dayList);
    this.selectedDay = {};
  }

  onCardClick(id) {
    if (this.selectedDay._id === id) {
      this.selectedDay = {};
      this.showDetails = false;
    } else {
      this._dayService.readOne(id).subscribe(day => {
        this.selectedDay = day;
        this.showDetails = true;
      });
    }
  }

  onDetailsClick() {
    this.selectedDay = {};
    this.showDetails = false;
  }
}
