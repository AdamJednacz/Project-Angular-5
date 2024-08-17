import { Component } from '@angular/core';
import {ButtonOverviewExample} from "./buttons/buttons.component";
import {MainComponent} from "./main/main.component";
import {AdminComponent} from "./admin/admin.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ButtonOverviewExample, MainComponent, AdminComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
