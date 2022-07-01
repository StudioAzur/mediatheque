import { NotFoundComponent } from './_pages/not-found/not-found.component';
import { ProductsPageComponent } from './_pages/products-page/products-page.component';
import { HomePageComponent } from './_pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomePageComponent},
  {path:'articles', component: ProductsPageComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
