import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { StarshipDialogComponent } from './starship-dialog/starship-dialog.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent {

  items: any[] = [];
  constructor(private api: ApiService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.api.getOneCategory().subscribe((_items: any) => {
      this.items = _items.results;

      console.log(this.items);
    })
  }

  onShowDetail(starshipURL: string){
    this.dialog.open(StarshipDialogComponent,{
      width: '60%',
      data: starshipURL
    });
  }
}
