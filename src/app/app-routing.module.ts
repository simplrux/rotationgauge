import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { BioComponent } from './bio/bio.component';
import { LikeComponent } from './like/like.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: 'bio', component: BioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'like', component: LikeComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
