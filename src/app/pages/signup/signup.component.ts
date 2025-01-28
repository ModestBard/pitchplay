import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
// export class ButtonOverviewExample {}

// @Component({
//   selector: 'app-signup',
//   imports: [],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
export class SignupComponent {

}
