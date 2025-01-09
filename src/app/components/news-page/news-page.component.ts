import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { Observable } from 'rxjs';
import { getNews } from '../../store/actions';
import { selectNews } from '../../store/selectors';
import { News, NewsData } from '../../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [IconSpriteModule, FormsModule, DatePipe, PaginationComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent implements OnInit {
  private newsData$!: Observable<NewsData>
  public news: News[] = []
  public searchValue: string = ''
  public page: number = 1

  constructor(private store: Store){}

  ngOnInit(): void {
    this.newsData$ = this.store.select(selectNews)
    this.newsData$.subscribe(data=> {
    if(!data.results){
    this.store.dispatch(getNews({page: this.page}))
  }
    this.news = data.results
    this.page = data.page
    })
  }

  public handleInput(){
    if(this.searchValue === '') return
    console.log(this.searchValue)
  }
  public clearInput(){
    this.searchValue = ''
  }
  public handlePage(newPage: number){
    this.page = newPage
    this.store.dispatch(getNews({ page: this.page }))
  }
//   public handlePag(){
// this.page += 1
// console.log(this.page)
// this.store.dispatch(getNews({ page: this.page }))
//   }
}
