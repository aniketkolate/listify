import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lst-root',
  imports: [RouterOutlet],
  templateUrl: './lst.component.html',
  styleUrl: './lst.component.scss'
})
export class LstComponent {
  title = 'listify';
}
