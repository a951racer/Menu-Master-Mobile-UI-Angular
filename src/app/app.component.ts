import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  masterList: any;
  menuOpen = false;
  viewMode = 'single';

  menuList = [];

  constructor(private _appService: AppService)
  {  }

  ngOnInit() {
    this._appService.list().subscribe(menuList  => {
      this.masterList = menuList;
      this.menuList = []
      this.menuList.push(this.masterList[0]);
      this.viewMode = 'single';
      console.log(menuList)
  })
  }

  menuToggle() {
    this.menuOpen = !this.menuOpen;
  }

  menuClick(button) {
    switch (button) {
      case 'today':
        this.menuList = []
        this.menuList.push(this.masterList[0]);
        this.viewMode = 'single';
        this.menuOpen = false;
        break;
      case 'half':
      this.menuList = []
      this.menuList.push(this.masterList[0]);
      this.menuList.push(this.masterList[1]);
      this.menuList.push(this.masterList[2]);
      this.viewMode = 'multi';
        this.menuOpen = false;
        break;
      case 'all':
        this.menuList = this.masterList;
        this.viewMode = 'multi';
        this.menuOpen = false;
        break;
    }
  }
}
