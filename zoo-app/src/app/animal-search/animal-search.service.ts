import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { animal } from '../animal';

@Injectable()
export class animalSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<animal[]> {
        return this.http
            .get(`api/animals/?name=${term}`)
            .map(response => response.json().data as animal[]);
    }
}