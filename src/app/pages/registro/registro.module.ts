import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
