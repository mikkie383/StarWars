import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  items: any[] = [];
  count: number = 0;
  currentPage: number = 1;// Initialize with the default page
  constructor(private api: ApiService, private dialog: MatDialog){}
  ngOnInit(): void {
   this.fetchData()
  }

  fetchData(){
    this.api.getOneCategory(this.currentPage).subscribe((_items: any) => {
      this.items = _items.results;
      this.count = _items.count;
      //console.log(_items);
    })
  }
  onShowDetail(personURL: string){
    this.dialog.open(PersonDialogComponent,{
      width: '60%',
      data: personURL
    });
  }

  onPageChange(event: any){
    this.currentPage = event.pageIndex + 1;
    this.fetchData();
  }

}
