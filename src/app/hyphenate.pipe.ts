import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphenate'
})
export class HyphenatePipe implements PipeTransform {

  transform(value: any):String {
    if(value){
      // Remove non-digit characters
      const cleanedValue = value.replace(/\D/g, '');

      // Add hyphen after every 4 digits
      const formattedValue = cleanedValue.replace(/(\d{4})/g, '$1-');

      // Trim any extra hyphens at the end
      return formattedValue.replace(/-+$/, '');
    }
   return value;
  }

}
