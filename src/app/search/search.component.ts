import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Pipe, PipeTransform } from '@angular/core';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users = [];
  searchString:string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {

    this.searchService.getUsers().subscribe((res:any) => this.users = res); 
  }

  searchRecord(){
    let searchString = this.searchString.split(' ');
    let firstName = searchString[0];
    let lastName = searchString[1];

    this.users = this.users.filter((user) => {
      (user['first_name'].indexOf(firstName) > -1) ||
      (user['last_name'].indexOf(lastName) > -1 )
    });

    

  }
  
}
