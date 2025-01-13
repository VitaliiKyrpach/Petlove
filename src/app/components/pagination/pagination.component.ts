import { Component, Input, output } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { Pages } from '../../interfaces/interfaces';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [IconSpriteModule, NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
@Input() pages!: Pages
newPage = output<number>()
private currentPage = 1;
public pageArr = [1,2,3];

public handlePage(action: string| number){
  if(typeof action === 'string'){
    switch(action){
      case 'first':
        this.pages.page > 1 && this.newPage.emit(1)
        this.currentPage = 1
        this.calcArr(this.currentPage)
          break;
      case 'prev':
        this.pages.page > 1 && this.newPage.emit(this.pages.page - 1)
        this.currentPage = this.pages.page 
        this.calcArr(this.currentPage)
          break;
      case 'next':
        this.pages.page < this.pages.totalPages &&  this.newPage.emit(this.pages.page + 1)
        this.currentPage = this.pages.page
        this.calcArr(this.currentPage)
          break;
          case 'last':
        this.pages.page !== this.pages.totalPages && this.newPage.emit(this.pages.totalPages)
        this.currentPage = this.pages.totalPages
        this.calcArr(this.currentPage)
          break;
    }
  } else{
    this.currentPage = action
    this.calcArr(this.currentPage)
    this.newPage.emit(action)
  }
  
    }

  private calcArr(page: number){
    if(page === 1 || page === 2){
      this.pageArr = [1,2,3]
    } else if( page === this.pages.totalPages){
      let pages = this.pages.totalPages
      this.pageArr = []
      for( let i = 3; i > 0; i-- ){
        this.pageArr.push(pages)
        pages -= 1
      }
      this.pageArr.reverse()
    }else{
      this.pageArr = []
      this.pageArr[0] = page - 1;
      this.pageArr[1] = page;
      this.pageArr[2] = page + 1
    }
  }
}
