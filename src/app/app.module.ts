import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SuperHeroesComponent } from './main/super-heroes/super-heroes.component';
import { HeaderComponent } from './src/app/main/super-heroes/pages/header/header.component';
import { FooterComponent } from './src/app/main/super-heroes/pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
