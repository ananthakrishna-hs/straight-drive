import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { IvyCarouselModule } from 'angular-responsive-carousel';
import { DigitOnlyModule } from '@uiowa/digit-only';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { FaqsContainerComponent } from 'src/app/components/faqs-container/faqs-container.component';
import { FaqItemComponent } from 'src/app/components/faqs-container/faq-item/faq-item.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ActivationPageComponent } from './pages/activation-page/activation-page.component';
import { ActivationGuard } from 'src/app/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FaqsContainerComponent,
    FaqItemComponent,
    LandingPageComponent,
    FooterComponent,
    RegisterPageComponent,
    ActivationPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IvyCarouselModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    DigitOnlyModule,
    HttpClientModule
  ],
  providers: [ActivationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
