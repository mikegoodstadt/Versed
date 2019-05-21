import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

const BASE_URL = 'https://swapi.co/api';

@Injectable({
  providedIn: 'root'
})
export class DatasetsLibService {
private collection: string;

  constructor(
    private httpClient: HttpClient,
    ) {}

  public extractId(results: any[]): any {
    console.log('Extracting id', results);
    return results.map(res => {
      const uuid = res.url.split(`${this.collection}/`)[1].split('/')[0];
      return { uuid, ...res };
    });
  }

  public getCharacters(path?: string): Observable<any> {
    console.log('Get people from SWAPI...');
    this.collection = 'people';
    return this.getData();
  }

  public getData(): Observable<any> {
    const path = `${BASE_URL}/${this.collection}`;
    console.log('Path: ', path);
    return this.httpClient.get(path)
      .pipe(
        map((res: any) => this.extractId(res.results)),
        catchError(this.handleError)
      );
  }

  private handleError(error) {
    alert('No data returned:' + JSON.stringify(error));
    return Observable.throw(error);
  }

}
