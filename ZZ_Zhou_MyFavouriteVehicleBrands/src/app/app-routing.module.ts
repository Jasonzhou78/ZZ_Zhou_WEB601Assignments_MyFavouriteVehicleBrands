import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from '../app/content-detail/content-detail.component';
import { ContentListComponent } from '../app/content-list/content-list.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

const routes: Routes = [
{ path: "list/:id", component:ContentDetailComponent },
{ path: 'list', component: ContentListComponent },
{ path: '', component: ContentListComponent },
{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: 
  // this hooks up our routes so they work
  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ContentDetailComponent]
