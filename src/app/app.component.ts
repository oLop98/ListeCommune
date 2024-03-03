import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListecommuneComponent } from './listecommune/listecommune.component';
import { ContentComponent } from './content/content.component';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListecommuneComponent, ContentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exocommune';
}
