import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  protected readonly title = signal('Sumit Singh is the Creative Developer.');
  protected readonly title1 = signal('This APP is under development.');


}
