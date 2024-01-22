import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PlanetDialogComponent } from './planet-dialog/planet-dialog.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {

  items: any[] = [];
  count: number = 0;
  currentPage: number = 1;// Initialize with the default page
  constructor(private api: ApiService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.api.getOneCategory(this.currentPage).subscribe((_items: any) => {
      this.items = _items.results;
      this.count = _items.count;
      //console.log(_items);
    })
  }

  onShowDetail(planetURL: string){
    this.dialog.open(PlanetDialogComponent,{
      width: '60%',
      data: planetURL
    });
  }

  onPageChange(event: any){
    this.currentPage = event.pageIndex + 1;
    this.fetchData();
    //console.log(event.pageIndex)
  }
}
