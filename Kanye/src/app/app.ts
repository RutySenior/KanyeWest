import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumList } from './components/album-list/album-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlbumList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Kanye');
}
