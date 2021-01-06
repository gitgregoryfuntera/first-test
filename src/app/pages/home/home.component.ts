import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes-service/recipes.service';
import { recipesMock } from '../../../mocks/recipes.mock.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes = [];
  isLoading: boolean = true;

  constructor(
    private recipeSvc: RecipesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeSvc.getRecipes().subscribe(res => {
      console.log(res);
      this.recipes = res;
      console.log(this.recipes);
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.router.navigate(['/error'])
      this.isLoading = false;
    })
  }

}
