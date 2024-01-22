import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Planet } from '../../../models/planet.model';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-planet-dialog',
  templateUrl: './planet-dialog.component.html',
  styleUrl: './planet-dialog.component.scss'
})
export class PlanetDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService) {}

  detail: Planet | undefined;
  ngOnInit(): void {
    console.log(this.data);
    this.api.getURLData(this.data).subscribe((_planetDetail: any) =>{
      this.detail = _planetDetail;
      console.log(_planetDetail);
    })
  }
}
