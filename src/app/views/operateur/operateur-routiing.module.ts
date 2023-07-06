import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MauritelComponent } from './mauritel/mauritel.component';
import { ChinguitelComponent } from './chinguitel/chinguitel.component';
import { MattelComponent } from './mattel/mattel.component';
import { HistoriqueComponent } from './historique/historique.component';



                                                                      
const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Operateur'
      },
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'mauritel'
        },
        {
          path: 'mauritel',
          component: MauritelComponent,
          data: {
            title: 'Mauritel'
          }
        },
        {
          path: 'historique',
          component: HistoriqueComponent,
          data: {
            title: 'Historique'
          }
        },
        {
          path: 'chinguitel',
          component: ChinguitelComponent,
          data: {
            title: 'Chinguitel'
          }
        },
        {
          path: 'mattel',
          component: MattelComponent,
          data: {
            title: 'Mattel'
          }
        },
      ]
    }
  ];
  
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OperateurRoutingModule {
  }