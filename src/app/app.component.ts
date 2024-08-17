import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import { AngularFireModule } from '@angular/fire/compat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutComponent, AngularFireModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
