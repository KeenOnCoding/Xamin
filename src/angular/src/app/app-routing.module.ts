import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'landing-page1', loadChildren: () => import('./landing-page1/landing-page1.module').then(m => m.LandingPage1Module) },
  { path: 'landing-page2', loadChildren: () => import('./landing-page2/landing-page2.module').then(m => m.LandingPage2Module) },
  { path: 'landing-page3', loadChildren: () => import('./landing-page3/landing-page3.module').then(m => m.LandingPage3Module) },
  { path: 'landing-page4', loadChildren: () => import('./landing-page4/landing-page4.module').then(m => m.LandingPage4Module) },
  { path: 'landing-page5', loadChildren: () => import('./landing-page5/landing-page5.module').then(m => m.LandingPage5Module) },
  { path: 'landing-page6', loadChildren: () => import('./landing-page6/landing-page6.module').then(m => m.LandingPage6Module) },
  { path: 'landing-page7', loadChildren: () => import('./landing-page7/landing-page7.module').then(m => m.LandingPage7Module) },
  { path: 'landing-page8', loadChildren: () => import('./landing-page8/landing-page8.module').then(m => m.LandingPage8Module) },
  { path: 'landing-page9', loadChildren: () => import('./landing-page9/landing-page9.module').then(m => m.LandingPage9Module) },
  { path: 'landing-page10', loadChildren: () => import('./landing-page10/landing-page10.module').then(m => m.LandingPage10Module) },
  { path: 'landing-page11', loadChildren: () => import('./landing-page11/landing-page11.module').then(m => m.LandingPage11Module) },
  { path: 'our-cases', loadChildren: () => import('./our-cases/our-cases.module').then(m => m.OurCasesModule) },
  { path: 'about-us', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'services', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
