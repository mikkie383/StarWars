import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';
import { People } from '../../../models/people.model';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrl: './person-dialog.component.scss'
})
export class PersonDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private api: ApiService) {}

  detail: People | undefined;
  ngOnInit(): void {
    this.api.getURLData(this.data).subscribe((_personDetail: any) =>{
      this.detail = _personDetail;
      //console.log(_personDetail);
    });

  }
}
