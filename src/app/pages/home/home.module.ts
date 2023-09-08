import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [HomeComponent]
})
export class HomeModule {}
