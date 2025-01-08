import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [IconSpriteModule, FormsModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  public searchValue: string = ''
  public handleInput(){
    if(this.searchValue === '') return
    console.log(this.searchValue)
  }
  public clearInput(){
    this.searchValue = ''
  }
}
