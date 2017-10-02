import { Injectable } from '@angular/core';
import { animal } from './animal';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class animalService {
    private animalsUrl: string = 'api/animals';
    private headers = new Headers({ 'Content Type': 'application/json' });

    constructor(private http: Http) { }

    getanimals(): Promise<animal[]> {
        return this.http.get(this.animalsUrl)
            .toPromise()
            .then(response => response.json().data as animal[])
            .catch(this.handleError);
    }

    getanimal(id: number): Promise<animal> {
        const url = `${this.animalsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as animal)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.log('An error occured', error);
        return Promise.reject(error.message || error);
    }

    update(animal: animal): Promise<animal> {
        const url = `${this.animalsUrl}/${animal.id}`;
        return this.http
            .put(url, JSON.stringify(animal), { headers: this.headers })
            .toPromise() 
            .then(() => animal)
            .catch(this.handleError);
    }
 
    create(name: string): Promise<animal> {
        return this.http
            .post(this.animalsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as animal)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.animalsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}