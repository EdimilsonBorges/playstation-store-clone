import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { ContainerAverageCardComponent } from './components/container-average-card/container-average-card.component';
import { AverageCardComponent } from './components/average-card/average-card.component';
import { AllCardsComponent } from './components/all-cards/all-cards.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { ContainerSmallCardComponent } from './components/container-small-card/container-small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderMainComponent,
    ContainerAverageCardComponent,
    AverageCardComponent,
    AllCardsComponent,
    SmallCardComponent,
    ContainerSmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
