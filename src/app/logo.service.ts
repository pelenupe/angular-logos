import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Logo } from './logo.model';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  private apiUrl = `${environment.apiUrl}/logos`;

  constructor(private http: HttpClient) { }

  getLogos(): Observable<Logo[]> {
    return this.http.get<Logo[]>(`${this.apiUrl}/list`).pipe(
      catchError(this.handleError)
    );
  }

  createLogo(logoData: Logo): Observable<Logo> {
    return this.http.post<Logo>(`${this.apiUrl}/create`, logoData).pipe(
      catchError(this.handleError)
    );
  }

  logosExist(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exist`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
