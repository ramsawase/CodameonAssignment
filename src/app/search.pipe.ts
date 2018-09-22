import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: any[], searchText: string){

    // if(!searchText) return users;

    // searchText = searchText.toUpperCase();
    // let searchString = searchText.split(' ');
    // let firstName = searchString[0];
    // let lastName = searchString[1];

    // if (firstName && lastName)
    //   return users.filter((user) =>
    //     (user['first_name'] == firstName) &&
    //     (!!lastName && user['last_name'] == lastName )
    //   );
    // else if (firstName)
    //   return users.filter((user) =>
    //     (user['first_name'] == firstName) ||
    //     (user['last_name'] == firstName )
    //   );
   }
}
