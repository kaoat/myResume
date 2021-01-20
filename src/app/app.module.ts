import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMeComponent,
    SkillsComponent,
    CertificatesComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
