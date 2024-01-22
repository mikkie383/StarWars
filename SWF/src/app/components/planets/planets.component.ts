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
  constructor(private api: ApiService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.api.getOneCategory().subscribe((_items: any) => {
      this.items = _items.results;

      //console.log(this.items);
    })
  }

  onShowDetail(planetURL: string){
    this.dialog.open(PlanetDialogComponent,{
      width: '60%',
      data: planetURL
    });
  }
}
