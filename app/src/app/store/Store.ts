import {effect, Injectable, WritableSignal, signal} from '@angular/core';
import {ISlogan, ITheme} from "../types/types";

@Injectable({
  providedIn: 'root',
})
export class Store {

  private slogans: WritableSignal<ISlogan[] | any[]> = signal<ISlogan[] | []>([])
  private themes: WritableSignal<ITheme[] | any[]> = signal<ITheme[] | []>([])

  constructor() {
    effect(() => {
      console.log('store: ', this.slogans(), this.themes());
    });
  }

  setSlogans(slogans: ISlogan[] | any[]) {
    this.slogans.set(slogans);
  }

  get Slogans() {
    return this.slogans;
  }

  setThemes(themes: ITheme[] | any[]) {
    this.themes.set(themes);
  }

  get Themes() {
    return this.themes;
  }
}
