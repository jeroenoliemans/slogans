import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ITheme, IThemeOption} from '../../types/types'
import { Store } from '../../store/Store'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient, private store: Store) {
    // this.fetchThemes()
    // this.fetchThemeOptions()
  }

  fetchThemes() {
    this.http.get<ITheme[]>(`${this.baseUrl}/api/theme`).subscribe(data => {
      this.store.setThemes(data)
    })
  }

  fetchThemeById(id:number): Observable<ITheme>  {
     return this.http.get<ITheme>(`${this.baseUrl}/api/theme/${id}`)
  }

  fetchThemeOptions() {
    this.http.get<IThemeOption[]>(`${this.baseUrl}/api/theme/options`).subscribe(data => {
      this.store.setThemeOptions(data)
    })
  }

  addTheme(theme: ITheme): void {
    const headers = { 'Content-Type': 'application/json' };

    this.http.post(`${this.baseUrl}/api/theme`, theme, { headers }).subscribe(data => {
      this.fetchThemes()
    });
  }

  deleteTheme(theme: ITheme): void {
    console.log(theme)
    this.http.delete(`${this.baseUrl}/api/theme/${theme.id}`).subscribe(data => {
      this.fetchThemes()
    });
  }
}
