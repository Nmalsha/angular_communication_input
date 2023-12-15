import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
@NgModule({
  declarations: [AppComponent, DeveloperComponent, SkillComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
