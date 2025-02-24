import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, FooterComponent],
})
export class AppModule {}
