import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./dashboard/components/header/header.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lst-root',
  imports: [RouterOutlet, HeaderComponent, FormsModule],
  templateUrl: './lst.component.html',
  styleUrl: './lst.component.scss'
})
export class LstComponent {

}
