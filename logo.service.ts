// logo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Logo } from './logo.model';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  private apiUrl = environment.apiUrl + '/logos';

  constructor(private http: HttpClient) { }

  getLogos(): Observable<Logo[]> {
    return this.http.get<Logo[]>(this.apiUrl + '/list');
  }

  createLogo(logoData: any): Observable<Logo> {
    return this.http.post<Logo>(this.apiUrl + '/create', logoData);
  }

  updateLogo(id: string, logoData: any): Observable<Logo> {
    return this.http.put<Logo>(`${this.apiUrl}/update/${id}`, logoData);
  }

  deleteLogo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
