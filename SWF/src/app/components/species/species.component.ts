import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { SpeciesDialogComponent } from './species-dialog/species-dialog.component';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent {

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

  onShowDetail(speciesURL: string){
    this.dialog.open(SpeciesDialogComponent,{
      width: '60%',
      data: speciesURL
    });
  }

  onPageChange(event: any){
    this.currentPage = event.pageIndex + 1;
    this.fetchData();
  }
}
