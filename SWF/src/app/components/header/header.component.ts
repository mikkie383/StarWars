import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  //@Output() showCategory = new EventEmitter<string>();
  categories: Array<string> | undefined;
  tabLables: string[] = []
  constructor(private api: ApiService, private router: Router){}

  ngOnInit(): void {
    this.api.getAllCategories().subscribe( (data: any) => {
      this.categories = Object.keys(data);
      this.tabLables = this.categories.map(key => this.capitalizeFirstLetter(key))
      //console.log(Object.keys(data));
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
    );
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  onShowCategory(category: string){
    this.router.navigate([`/${category}`]);
    this.api.setCategory(category);
    //console.log(category);
  }

}
