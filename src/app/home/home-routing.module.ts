import { CreateCollabComponent } from './create-collab/create-collab.component';
import { CollabCardComponent } from './collab-card/collab-card.component';
import { HomeComponent } from './collab-list/home.component';
import { EditCollabComponent } from './edit-collab/edit-collab.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path:"collabinfo",
    component: CollabCardComponent
  },
  {
    path:"createcollab",
    component: CreateCollabComponent
  },
  {
    path:"editcollab/:_id",
    component: EditCollabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }