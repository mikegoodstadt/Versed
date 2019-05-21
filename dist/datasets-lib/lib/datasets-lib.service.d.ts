import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class DatasetsLibService {
    private httpClient;
    private collection;
    constructor(httpClient: HttpClient);
    extractId(results: any[]): any;
    getCharacters(path?: string): Observable<any>;
    getData(): Observable<any>;
    private handleError;
}
