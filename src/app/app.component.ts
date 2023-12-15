import { Component } from '@angular/core';
import { Developer } from './models/developer.model';
import { Skill } from './models/skill.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'communication_input';
  developerData: Developer;

  constructor() {
    const skills: Skill[] = [
      new Skill(
        'Angular',
        '../assets/images/angularlogo.png',
        'https://angular.io/'
      ),
      new Skill(
        'React',
        '../assets/images/reactlogo.png',
        'https://reactjs.org/'
      ),
    ];

    this.developerData = new Developer(
      'Doe',
      'John',
      25,
      'Male',
      'Passionate developer',
      skills
    );
  }
}
