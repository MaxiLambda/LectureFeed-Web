import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./component/pages/error/not-found/not-found.component";
import {ParticipantSessionComponent} from "./component/pages/participant/participant-session/paricipant-session.component";
import {ParticipantLoginComponent} from "./component/pages/participant/participant-login/participant-login.component";
import {PresenterManagementComponent} from "./component/pages/presenter/presenter-management/presenter-management.component";
import {PresenterSessionComponent} from "./component/pages/presenter/presenter-session/presenter-session.component";


const routes: Routes = [
  { path: 'presenter', component: PresenterManagementComponent },
  { path: 'presenter/:sessionId',  component: PresenterSessionComponent },
  { path: 'participant/:sessionId',  component: ParticipantSessionComponent },
  { path: 'participant', component: ParticipantLoginComponent },
  { path: '',   redirectTo: 'participant', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
