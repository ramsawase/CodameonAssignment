import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  users = [];
  firstName:string;
  lastName:String;
  progrss:number;

  constructor(private searchService: SearchService) { }

  searchRecord(){
    this.move(10);
    if (this.firstName == undefined && this.lastName == undefined )
      this.searchService.getUsers().subscribe((res:any) => {
        this.move(100);
        this.removeProgress();
        this.users = res;
      });
    else if (!!this.firstName && !!this.lastName)
      this.searchService.getUsersByName(this.firstName, this.lastName).subscribe((res:any) => {
        this.move(100);
        this.removeProgress();
        this.users = res
      });
    else if (!!this.firstName)
      this.searchService.getUsersByFirstName(this.firstName).subscribe((res:any) => {
        this.move(100);
        this.removeProgress();
        this.users = res;
      });
    else if (!!this.lastName)
      this.searchService.getUsersByLastName(this.lastName).subscribe((res:any) => {
        this.move(100);
        this.removeProgress();
        this.users = res;
      });
   }

  move(width=10) {
    var elem = <HTMLElement>document.querySelector("#myBar");
    var showBar = <HTMLElement>document.querySelector("#myProgress");
    showBar.style.display = "block";

    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90)
        clearInterval(id);
      else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }

  removeProgress(){
    var elem = <HTMLElement>document.querySelector("#myProgress");
    elem.style.display = "none";
  }
}

