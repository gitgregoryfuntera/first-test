import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-view-recipe-header',
  templateUrl: './view-recipe-header.component.html',
  styleUrls: ['./view-recipe-header.component.scss']
})
export class ViewRecipeHeaderComponent implements OnInit {
  @Input() data: any;
  API_URL = apiUrl;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
