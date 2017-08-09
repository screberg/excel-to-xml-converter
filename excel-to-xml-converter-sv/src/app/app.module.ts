import { BrowserModule     } from '@angular/platform-browser';
import { NgModule          } from '@angular/core';
import { XlsxToJsonService } from './xlsx-to-json-service';
import { AppComponent      } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [XlsxToJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
