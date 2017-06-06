import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  term: string;
  result: string;

  constructor(private searchService: SearchService) {}

  search() {
    this.searchService.search(this.term)
      .subscribe(data => {
        this.result = JSON.stringify(data);
      });
  }
}
