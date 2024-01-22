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
  //count: number = 0;
  //currentPage: number = 1;// Initialize with the default page
  constructor(private api: ApiService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.api.getOneCategory().subscribe((_items: any) => {
      this.items = _items.results;

    })
  }

  // fetchData(){
  //   this.api.getOneCategory(this.currentPage).subscribe((_items: any) => {
  //     this.items = _items.results;
  //     this.count = _items.count;
  //   })
  // }

  onShowDetail(filmURL: string){
    this.dialog.open(FilmDialogComponent,{
      width: '60%',
      data: filmURL
    });
  }

  // onPageChange(event: any){
  //   this.currentPage = event.pageIndex + 1;
  //   this.fetchData();
  // }
}
