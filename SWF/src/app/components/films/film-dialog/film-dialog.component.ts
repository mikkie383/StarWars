import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';
import { Film } from '../../../models/film.model';

@Component({
  selector: 'app-film-dialog',
  templateUrl: './film-dialog.component.html',
  styleUrl: './film-dialog.component.scss'
})
export class FilmDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private api: ApiService) {}

  detail: Film | undefined;
  ngOnInit(): void {
    this.api.getURLData(this.data).subscribe((_filmDetail: any) =>{
      this.detail = _filmDetail;
      //console.log(_personDetail);
    });

  }
}

