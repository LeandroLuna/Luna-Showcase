import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ShowcaseComponent } from './features/showcase/showcase.component';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent, loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'showcase', component: ShowcaseComponent, loadChildren: () => import('./features/showcase/showcase.module').then(m => m.ShowcaseModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
