import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ServiceService } from "../services/service.service";
import { getFriends, getFriendsSuccess, getNews, getNewsSuccess } from "./actions";
import { catchError, EMPTY, map, switchMap } from "rxjs";

@Injectable()
export class dataEffects {
    private actions$ = inject(Actions)
    constructor(private service: ServiceService){}

    loadFriends$ = createEffect(() => 
        this.actions$.pipe(
          ofType(getFriends),
          switchMap(()=> this.service.getFriends().pipe(
            map(friends=> getFriendsSuccess({friends})),
            catchError(error=> EMPTY)
          ))
        )
      );
    
    loadNews$ = createEffect(()=>
      this.actions$.pipe(
        ofType(getNews),
        switchMap((action)=> {
          
          return this.service.getNews(action.page, action.search).pipe(
          map(news=> getNewsSuccess({news})),
          catchError(error=> EMPTY)
        )})
      )
    )
}