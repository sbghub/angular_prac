import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { animalSearchService } from './animal-search.service';
import { animal } from '../animal';
 
@Component({
  selector: 'animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: [ './animal-search.component.css' ],
  providers: [animalSearchService]
})
export class animalSearchComponent implements OnInit {
  animals: Observable<animal[]>;
  private searchTerms = new Subject<string>();
 
  constructor(
    private animalSearchService: animalSearchService,
    private router: Router) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.animals = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.animalSearchService.search(term)
        // or the observable of empty animals if there was no search term
        : Observable.of<animal[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<animal[]>([]);
      });
  }
 
  gotoDetail(animal: animal): void {
    let link = ['/detail', animal.id];
    this.router.navigate(link);
  }
}
