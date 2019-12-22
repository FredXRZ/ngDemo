import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './../app/views/home/home.component';
import {ConfigComponent} from './../app/views/config/config.component';
import {FilesComponent} from './../app/views/files/files.component';
import {GrammarComponent} from './../app/views/grammar/grammar.component';
import {RouterComponent} from './../app/views/router/router.component';

const routes:Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'config',
    component:ConfigComponent
  },
  {
    path:'files',
    component:FilesComponent
  },
  {
    path:'grammar',
    component:GrammarComponent
  },
  {
    path:'router',
    component:RouterComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
