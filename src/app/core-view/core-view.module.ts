import { RatingComponent } from './components/atoms/rating/rating.component';
import { CardComponent } from './components/atoms/card/card.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/atoms/spinner/spinner.component';
import { InputSelectComponent } from './components/atoms/input-select/input-select.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    InputSelectComponent,
    CheckboxComponent,
    ButtonComponent,
    InputComponent,
    CardComponent,
    RatingComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [
    SpinnerComponent,
    InputSelectComponent,
    CheckboxComponent,
    ButtonComponent,
    InputComponent,
    CardComponent,
    RatingComponent,
  ],
})
export class CoreViewModule {}
