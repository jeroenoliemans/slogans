import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ThemeService} from "../service/themes.service";

@Component({
  selector: 'app-add-theme',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.css'
})
export class AddThemeComponent {
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
