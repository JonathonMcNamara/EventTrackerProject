import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Meal } from '../models/meal';


@Injectable({
  providedIn: 'root'
})
export class MealService {

  private url = environment.baseUrl + 'api/meals';

  constructor(
    private http: HttpClient
  ) { }

    index(): Observable<Meal[]> {
      return this.http.get<Meal[]>(this.url).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error('MealService.index(): error retrieving meals' + err)
            );
        })
          );
    }

    show(mealId: number): Observable<Meal>{
      return this.http.get<Meal>(this.url + mealId).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error('MealService.show(): error retrieving meal' + err)
            );
        })
      )
    };

    create(meal: Meal): Observable<Meal> {
      return this.http.post<Meal>(this.url, meal).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error('MealService.create(): error creating meal' + err)
            );
        })
      )
    };



}
