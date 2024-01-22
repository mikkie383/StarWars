import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { FilmDialogComponent } from './film-dialog/film-dialog.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {

  items: any[] = [];
  constructor(private api: ApiService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.api.getOneCategory().subscribe((_items: any) => {
      this.items = _items.results;

      console.log(this.items);
    })
  }

  onShowDetail(filmURL: string){
    this.dialog.open(FilmDialogComponent,{
      width: '60%',
      data: filmURL
    });
  }
}
