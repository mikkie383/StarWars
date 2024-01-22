import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { VehicleDialogComponent } from './vehicle-dialog/vehicle-dialog.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {

  items: any[] = [];
  constructor(private api: ApiService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.api.getOneCategory().subscribe((_items: any) => {
      this.items = _items.results;

      console.log(this.items);
    })
  }

  onShowDetail(vehicleURL: string){
    this.dialog.open(VehicleDialogComponent,{
      width: '60%',
      data: vehicleURL
    });
  }
}
