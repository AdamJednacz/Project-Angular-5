import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from "@angular/router";

/**
 * @title Basic buttons
 */
@Component({
  selector: 'app-buttons',
  templateUrl: 'buttons.component.html',
  styleUrl: 'buttons.component.css',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterLink],
})
export class ButtonOverviewExample {}
