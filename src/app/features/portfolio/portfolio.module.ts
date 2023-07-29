import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PortfolioComponent } from './portfolio.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ClientsComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
