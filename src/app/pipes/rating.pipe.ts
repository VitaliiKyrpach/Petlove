import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true,
})
export class RatingPipe implements PipeTransform {
  transform(value: number): any {
    let newValue = Math.floor(value / 250);
    if (newValue < 1) {
      return 1;
    } else if (newValue > 10) {
      return 10;
    } else {
      return newValue;
    }
  }
}
