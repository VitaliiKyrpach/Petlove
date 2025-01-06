import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address',
  standalone: true
})
export class AddressPipe implements PipeTransform {

  transform(value: string, ): string {
    if(!value) return ' website only'
    const arr = value.split(', ')

    if(arr.length === 1) {
      return arr[0]
    }else{
      const cityArr = arr[1].split(' ')
      if(cityArr.length > 1 && cityArr[1].startsWith('(')){
        arr[1] = cityArr[0]
      }
      const address = arr[0] + ', ' + arr[1]
      return address
    }
    
  }

}
