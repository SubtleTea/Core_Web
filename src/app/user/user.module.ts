import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page/user-page.component';

//Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule }  from '@angular/material/grid-list';
import { MatListModule }  from '@angular/material/list';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { EditClassesComponent } from './edit-classes/edit-classes.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';

@NgModule({
  declarations: [UserPageComponent, EditUserFormComponent, EditClassesComponent, EditSkillsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,

    //Angular Material
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    ScrollDispatchModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDialogModule,

    //Flex Module
    FlexLayoutModule,

    //Forms
    FormsModule,
    ReactiveFormsModule,

  ],
  entryComponents: [
    EditUserFormComponent,
    EditClassesComponent,
    EditSkillsComponent
  ]
})
export class UserModule { }
