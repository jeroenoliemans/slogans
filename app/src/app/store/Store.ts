import {effect, Injectable, WritableSignal, signal} from '@angular/core';
import {ISlogan, ITheme, IThemeOption} from "../types/types";

@Injectable({
  providedIn: 'root',
})
export class Store {

  private slogans: WritableSignal<ISlogan[] | any[]> = signal<ISlogan[] | []>([])
  private themes: WritableSignal<ITheme[] | any[]> = signal<ITheme[] | []>([])
  private themeOptions: WritableSignal<IThemeOption[] | any[]> = signal<IThemeOption[] | []>([])

  constructor() {
    effect(() => {
      console.log('store: ', this.slogans(), this.themes(), this.themeOptions);
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

  setThemeOptions(themes: IThemeOption[] | any[]) {
    this.themeOptions.set(themes);
  }

  get ThemeOptions() {
    return this.themeOptions;
  }
}
