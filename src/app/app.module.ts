import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { BioComponent } from './bio/bio.component';
import { LikeComponent } from './like/like.component';
import { ChatComponent } from './chat/chat.component';
import { AnimationsService } from './animations.service';
import { SlickModule } from 'ngx-slick';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    BioComponent,
    LikeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlickModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [AnimationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
