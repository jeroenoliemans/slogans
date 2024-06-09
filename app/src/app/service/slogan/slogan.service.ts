import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ISlogan, ITheme} from '../../types/types'
import { Store } from '../../store/Store'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SloganService {
  private readonly baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient, private store: Store) {
  }

  fetchSlogans() {
    this.http.get<ISlogan[]>(`${this.baseUrl}/api/slogan`).subscribe(data => {
      this.store.setSlogans(data)
    })
  }

  fetchSloganById(id:number): Observable<ISlogan>  {
     return this.http.get<ISlogan>(`${this.baseUrl}/api/slogan/${id}`)
  }

  addSlogan(slogan: ISlogan): void {
    const headers = { 'Content-Type': 'application/json' };

    this.http.post(`${this.baseUrl}/api/slogan`, slogan, { headers }).subscribe(data => {
      this.fetchSlogans()
    });
  }

  deleteSlogan(slogan: ISlogan): void {
    console.log(slogan)
    this.http.delete(`${this.baseUrl}/api/slogan/${slogan.id}`).subscribe(data => {
      this.fetchSlogans()
    });
  }
}
