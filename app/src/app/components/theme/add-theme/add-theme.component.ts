import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ThemeService} from "../../../service/theme/theme.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ITheme} from "../../../types/types";
import {Store} from "../../../store/Store";

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
export class AddThemeComponent implements OnInit{
  themeForm = this.formBuilder.group({
    label: '',
    backgroundColor: '',
    backgroundColorLeft: '',
    backgroundColorRight: '',
    borderColor: '',
    fontColor: ''
  })

  editTheme: ITheme | null
  editThemeId: number | null

  constructor(
    public themeService: ThemeService,
    private formBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    public store: Store
  ) {
    this.editThemeId = null;
    this.editTheme = null;
  }

  ngOnInit() {
    this.themeService.fetchThemes()

    this.route.params.subscribe(params => {
      this.editThemeId = parseInt(params['id']);
    })

    // set values if editing
    if (this.editThemeId) {
      this.themeService.fetchThemeById(this.editThemeId).subscribe(data => {
        this.themeForm.controls.label.setValue(data.label)
        this.themeForm.controls.backgroundColor.setValue(data.backgroundColor)
        this.themeForm.controls.backgroundColorLeft.setValue(data.backgroundColorLeft)
        this.themeForm.controls.backgroundColorRight.setValue(data.backgroundColorRight)
        this.themeForm.controls.fontColor.setValue(data.fontColor)
        this.themeForm.controls.borderColor.setValue(data.borderColor)
      })
    }
  }

  onSubmit() {
    this.themeService.addTheme({
      id: this.editThemeId,
      label: this.themeForm.value.label as string,
      backgroundColor: this.themeForm.value.backgroundColor as string,
      backgroundColorLeft: this.themeForm.value.backgroundColorLeft as string,
      backgroundColorRight: this.themeForm.value.backgroundColorRight as string,
      borderColor: this.themeForm.value.borderColor as string,
      fontColor: this.themeForm.value.fontColor as string
    })
    this.themeForm.reset();
    this.router.navigate(['/themes'])
  }
}
