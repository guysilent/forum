import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForumComponent } from './forum/forum.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForumComponent
  ],
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatDialogModule, 
    MatTableModule, 
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'forum', component: ForumComponent}
  ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
