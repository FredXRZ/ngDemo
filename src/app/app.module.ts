import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { ConfigComponent } from './views/config/config.component';
import { FilesComponent } from './views/files/files.component';
import { GrammarComponent } from './views/grammar/grammar.component';
import { RouterComponent } from './views/router/router.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConfigComponent,
    FilesComponent,
    GrammarComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
