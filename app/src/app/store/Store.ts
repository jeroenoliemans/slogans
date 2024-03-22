import {effect, Injectable, WritableSignal, signal} from '@angular/core';
import {ISlogan} from "../types/types";

@Injectable({
  providedIn: 'root',
})
export class Store {

  private slogans: WritableSignal<ISlogan[] | any[]> = signal<ISlogan[] | []>([])

  constructor() {
    effect(() => {
      console.log('store: ', this.slogans());
    });
  }

  setSlogans(slogans: ISlogan[] | any[]) {
    this.slogans.set(slogans);
  }

  get Slogans() {
    return this.slogans;
  }
}
