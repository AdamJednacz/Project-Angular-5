import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  formData = {
    date: '',
    firstName: '',
    lastName: '',
    color: ''
  };

  constructor(private firebaseService: FirebaseService) {}

  submitForm() {
    this.firebaseService.saveFormData(this.formData)
      .then(() => alert('Dane zostały wysłane!'))
      .catch((error) => alert('Wystąpił błąd: ' + error));
  }
}
