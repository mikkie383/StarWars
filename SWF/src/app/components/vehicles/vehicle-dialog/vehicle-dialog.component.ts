import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';
import { Vehicle } from '../../../models/vehicle.models';

@Component({
  selector: 'app-vehicle-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrl: './vehicle-dialog.component.scss'
})
export class VehicleDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService) {}

  detail: Vehicle | undefined;
  ngOnInit(): void {
    this.api.getURLData(this.data).subscribe((_vehicleDetail: any) =>{
      this.detail = _vehicleDetail;
      //console.log(_vehicleDetail);
    })
  }
}

