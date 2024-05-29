import {Component, Input, } from '@angular/core';
import {NgStyle} from '@angular/common'
import {ITheme} from "../../../types/types";
import {ThemeService} from "../../../service/theme/theme.service";

@Component({
  selector: 'theme',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  @Input() theme?:ITheme;

  constructor(
    private themeService:ThemeService
  ) {
  }

  public getGradientBackground(theme: ITheme) {
    return `repeating-conic-gradient(at 100%,#0000 0.000045%, #000d 0.0005%),
    linear-gradient(${theme?.backgroundColor}, transparent),
    linear-gradient(to top left, ${theme?.backgroundColorLeft}, transparent),
    linear-gradient(to top right, ${theme?.backgroundColorRight}, transparent)`
  }

  delete(theme:ITheme) {
    this.themeService.deleteTheme(theme)
  }
}
