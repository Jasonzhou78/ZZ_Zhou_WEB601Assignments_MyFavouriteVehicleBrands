import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from '../app/content-list/content-list.component';
import { ContentDetailComponent } from '../app/content-detail/content-detail.component';


const routes: Routes = [
  {
    path:"list",
    component: ContentListComponent,
  },
  {
    path:'detail',
    component: ContentDetailComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }


