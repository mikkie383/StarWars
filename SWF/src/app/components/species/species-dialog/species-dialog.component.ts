import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';
import { Species } from '../../../models/species.model';

@Component({
  selector: 'app-species-dialog',
  templateUrl: './species-dialog.component.html',
  styleUrl: './species-dialog.component.scss'
})
export class SpeciesDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService) {}

  detail: Species | undefined;
  ngOnInit(): void {
    this.api.getURLData(this.data).subscribe((_speciesDetail: any) =>{
      this.detail = _speciesDetail;
      //console.log(_speciesDetail);
    })
  }
}
