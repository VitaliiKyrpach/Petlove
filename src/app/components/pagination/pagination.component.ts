import { Component, Input, OnInit, output } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { NewsData, Pages } from '../../interfaces/interfaces';
import { NgClass } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [IconSpriteModule, NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
@Input() data$!: Observable<NewsData>
newPage = output<number>()
public pageArr: number[] = [];
public pages: Pages = {
  page: 1,
  totalPages: 1
};
public isExist: boolean = false

ngOnInit(): void {
  this.data$.subscribe((data) => {
    this.pages.page = data.page;
    this.pages.totalPages = data.totalPages;
    this.isExist = data.results.length > 0
    this.calcArr(this.pages.page);
  });
}

public handlePage(action: string | number) {
  if (typeof action === 'string') {
    switch (action) {
      case 'first':
        if (this.pages.page > 1) {
          this.newPage.emit(1);
          this.pages.page = 1;
          this.calcArr(this.pages.page);
        }
        break;
      case 'prev':
        if (this.pages.page > 1) {
          this.newPage.emit(this.pages.page - 1);
          this.pages.page -= 1;
          this.calcArr(this.pages.page);
        }
        break;
      case 'next':
        if (this.pages.page < this.pages.totalPages) {
          this.newPage.emit(this.pages.page + 1);
          this.pages.page += 1;
          this.calcArr(this.pages.page);
        }
        break;
      case 'last':
        if (this.pages.page !== this.pages.totalPages) {
          this.newPage.emit(this.pages.totalPages);
          this.pages.page = this.pages.totalPages;
          this.calcArr(this.pages.page);
        }
        break;
    }
  } else {
    this.pages.page = action;
    this.calcArr(this.pages.page);
    this.newPage.emit(action);
  }
}

private calcArr(page: number) {
  this.pageArr = [];
  if (this.pages.totalPages <= 3) {
    for (let i = 1; i <= this.pages.totalPages; i++) {
      this.pageArr.push(i);
    }
  } else {
    if (page === 1) {
      this.pageArr = [1, 2, 3];
    } else if (page === this.pages.totalPages) {
      this.pageArr = [this.pages.totalPages - 2, this.pages.totalPages - 1, this.pages.totalPages];
    } else {
      this.pageArr = [page - 1, page, page + 1];
    }
  }
}
}
