import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value, term) {
        console.log(term + ' ' + value);
        if (term == null) {
            return null;
        }
        return value.filter((item) => {
            return  item.first_name.includes(term) || item.last_name.includes(term);
        });
    }

}
