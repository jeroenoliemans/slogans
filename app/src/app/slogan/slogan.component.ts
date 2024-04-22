import { Component, Input } from '@angular/core';
import {ISlogan, ITheme} from '../types/types'
import {SloganService} from '../service/slogan.service'
import {NgStyle} from "@angular/common";

@Component({
  selector: 'slogan',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './slogan.component.html',
  styleUrl: './slogan.component.css'
})
export class SloganComponent {
  @Input() slogan?:ISlogan;
  @Input() theme?:ITheme;
  constructor(
    private sloganService: SloganService
  ) {}

  delete(slogan:ISlogan) {
    this.sloganService.deleteSlogan(slogan)
  }

  public getGradientBackground(theme: ITheme) {
    return theme ? `repeating-conic-gradient(at 100%,#0000 0.000045%, #000d 0.0005%),
    linear-gradient(${theme?.backgroundColor}, transparent),
    linear-gradient(to top left, ${theme?.backgroundColorLeft}, transparent),
    linear-gradient(to top right, ${theme?.backgroundColorRight}, transparent)` : ''
  }
}
