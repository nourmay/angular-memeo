import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { memo } from './memo';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>{{getTitle(framework)}}</h2>
  <h2>{{getTitle1(framework)}} </h2>

  <button (click)="changeFramework()">Change Framework</button>
  <hr>
  <h4>Number: {{count}}</h4>
  <button (click)="counterAdd()">Add</button>
  `,
})
export class App {
  framework = 'Angular';
  count = 0;

  changeFramework() {
    this.framework = this.framework === 'Angular' ? 'React' : 'Angular';
  }
  counterAdd() {
    this.count += 1;
  }

  getTitle1(framework: string) {
    console.log('getTitle without memeo is called');
    return `I love ${framework.toUpperCase()} with no memeo`;
  }
  getTitle = memo((framework: string) => {
    console.log('getTitle is called');
    return `I love ${framework.toUpperCase()}`;
  });
}

bootstrapApplication(App);
