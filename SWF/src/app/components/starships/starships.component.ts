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

  onShowDetail(starshipURL: string){
    this.dialog.open(StarshipDialogComponent,{
      width: '60%',
      data: starshipURL
    });
  }

  onPageChange(event: any){
    this.currentPage = event.pageIndex + 1;
    this.fetchData();
  }
}
