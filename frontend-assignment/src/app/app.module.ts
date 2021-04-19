import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageContainer } from './container/landing-page-container/landing-page.container';
import { LandingPageHeaderComponent } from './component/landing-page-header/landing-page-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageContentComponent } from './component/landing-page-content/landing-page-content.component';
import { LandingPageFooterComponent } from './component/landing-page-footer/landing-page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageContainer,
    LandingPageHeaderComponent,
    LandingPageContentComponent,
    LandingPageFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
