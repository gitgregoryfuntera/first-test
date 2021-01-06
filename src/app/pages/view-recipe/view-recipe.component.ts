import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes-service/recipes.service';
import {MatDialog} from '@angular/material/dialog';
import { SpecialsModalComponent } from 'src/app/modals/specials-modal/specials-modal.component';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss'],
})
export class ViewRecipeComponent implements OnInit {
  data: any = {};
  isLoading: boolean = true;

  constructor(
    private recipeSvc: RecipesService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getRecipe(id);
  }

  getRecipe(uuid: string) {
    this.recipeSvc.getRecipe(uuid).subscribe((res) => {
      console.log(res);
      this.data = res;

      const ingredients = this.data.ingredients;

      ingredients.forEach((value, index) => {
        this.recipeSvc.getSpecials(value.uuid).subscribe((specials) => {
          if (specials) {
            this.data.ingredients[index]['specials'] = specials;
          }
        });
      });

      this.isLoading = false;
      console.log(this.data, 'reinvented');
    }, error => {
      console.log(error);
      this.router.navigate(['error']);
    });
  }

  openSpecials(specials: any) {
    this.dialog.open(SpecialsModalComponent, {
      data: specials
    });
  }
}
