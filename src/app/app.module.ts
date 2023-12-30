import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CreditCardFormatterComponent } from './credit-card-formatter/credit-card-formatter.component';
import { FormsModule } from '@angular/forms';
import { HyphenatePipe } from './hyphenate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    CreditCardFormatterComponent,
    HyphenatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
