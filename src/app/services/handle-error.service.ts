/* ••[1]••••••••••••••••••••••••• handle-error.service.ts •••••••••••••••••••••••••••••• */

import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  public handleError(httpErrorResponse: HttpErrorResponse): Observable<never> {
    let errorMessage: string | undefined = undefined;
    if (httpErrorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${httpErrorResponse.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${httpErrorResponse.status}: ${httpErrorResponse.message}`;
    }
    console.error(httpErrorResponse);
    return throwError((): string | undefined => errorMessage);
  }
}
