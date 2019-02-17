import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { apiConfig } from './apiConfig';

@Injectable()
export class AppService {
  private _baseURL = apiConfig.menuURL;
  constructor (private _http: HttpClient) {}

/*** menu stuff ********************************/

list(): Observable<any> {
  return this._http
  .get(this._baseURL)
  .pipe(catchError(this.handleError));
}

/***  Error Handling **************************************/

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message || 'Server error');
  }
}
