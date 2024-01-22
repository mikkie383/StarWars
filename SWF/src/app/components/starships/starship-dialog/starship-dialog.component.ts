import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Starship } from '../../../models/starship.model';

@Component({
  selector: 'app-starship-dialog',
  templateUrl: './starship-dialog.component.html',
  styleUrl: './starship-dialog.component.scss'
})
export class StarshipDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService) {}

  detail: Starship | undefined;
  ngOnInit(): void {
    this.api.getURLData(this.data).subscribe((_starshipDetail: any) =>{
      this.detail = _starshipDetail;
      //console.log(_starshipDetail);
    })
  }
}

