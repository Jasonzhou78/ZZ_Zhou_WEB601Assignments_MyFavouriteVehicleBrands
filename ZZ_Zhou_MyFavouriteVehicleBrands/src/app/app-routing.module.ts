import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from '../app/content-detail/content-detail.component';

const routes: Routes = [{ path: 'id', component: ContentDetailComponent }];

@NgModule({
  declarations: [],
  imports: 
  // this hooks up our routes so they work
  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ContentDetailComponent]
