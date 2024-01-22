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
    })
  }

  onShowDetail(vehicleURL: string){
    this.dialog.open(VehicleDialogComponent,{
      width: '60%',
      data: vehicleURL
    });
  }

  onPageChange(event: any){
    this.currentPage = event.pageIndex + 1;
    this.fetchData();
  }
}
