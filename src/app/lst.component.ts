import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./dashboard/components/header/header.component";

@Component({
  selector: 'lst-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './lst.component.html',
  styleUrl: './lst.component.scss'
})
export class LstComponent {
  title = 'listify';
}
