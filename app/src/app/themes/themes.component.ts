import { Component } from '@angular/core';
import {Store}  from '../store/Store'
import {ThemeService} from '../service/themes.service'
import {NgForOf} from "@angular/common";
import {FormsModule, FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {SloganComponent} from "../slogan/slogan.component";

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [FormsModule, NgForOf, ReactiveFormsModule, SloganComponent],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css'
})
export class ThemesComponent {
  themeForm = this.formBuilder.group({
    label: '',
    backgroundColor: '',
    backgroundColorLeft: '',
    backgroundColorRight: '',
    borderColor: '',
    fontColor: ''
  })

  constructor(
    public themeService: ThemeService,
    private formBuilder: FormBuilder,
    public store: Store
  ) {
  }

  onSubmit() {
    this.themeService.addTheme({
      id: null,
      label: this.themeForm.value.label as string,
      backgroundColor: this.themeForm.value.backgroundColor as string,
      backgroundColorLeft: this.themeForm.value.backgroundColorLeft as string,
      backgroundColorRight: this.themeForm.value.backgroundColorRight as string,
      borderColor: this.themeForm.value.borderColor as string,
      fontColor: this.themeForm.value.fontColor as string
    })
    this.themeForm.reset();
    this.themeService.fetchThemes()
  }
}
