import { Component, Input, output } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
@Input() page!: number
newPage = output<number>()
public handlePage(action: string){
if(action=== 'prev'){
this.page > 1 && this.newPage.emit(this.page - 1)
}else if(action === 'next'){
  this.newPage.emit(this.page + 1)
}
}
}
