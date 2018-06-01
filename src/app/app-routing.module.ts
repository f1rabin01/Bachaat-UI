import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { UsersComponent} from './users/users.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'user', component: UsersComponent },
  // {path: 'app', component: AppComponent}
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }