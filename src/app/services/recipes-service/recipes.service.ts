import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map, take, takeLast } from 'rxjs/operators';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get(`${apiUrl}/recipes`);
  }

  getRecipe(uuid: string): Observable<any> {
    return this.http.get(`${apiUrl}/recipes/${uuid}`);
  }

  getSpecials(ingredientID: string) {
    return this.http.get(`${apiUrl}/specials`).pipe(
      map((res: any) => {
        let data = {};
        res.forEach(value => {
          if (value.ingredientId === ingredientID) {
            data = value
          }
        })
        console.log(data);
        return data;
      }),

    )
  }
}
