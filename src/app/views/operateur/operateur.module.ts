import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { MauritelComponent } from './mauritel/mauritel.component';
import { ChinguitelComponent } from './chinguitel/chinguitel.component';
import { MattelComponent } from './mattel/mattel.component';

import { OperateurRoutingModule } from './operateur-routiing.module';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [
   // MauritelComponent,
   // ChinguitelComponent,
   // MattelComponent,
  ],
  imports: [
    CommonModule,
    OperateurRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,
    //SDocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    NavbarModule
  ]
})
export class OperateurModule {
}
