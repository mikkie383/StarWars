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
  constructor(private api: ApiService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.api.getOneCategory().subscribe((_items: any) => {
      this.items = _items.results;

      console.log(this.items);
    })
  }

  onShowDetail(speciesURL: string){
    this.dialog.open(SpeciesDialogComponent,{
      width: '60%',
      data: speciesURL
    });
  }
}
