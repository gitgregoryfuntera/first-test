import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() data: any;
  API_URL = apiUrl;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
