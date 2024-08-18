import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  date = signal("1")
  firstName = signal("2")
  lastName = signal("3")
  color= signal("green")
  fireService = inject(FirebaseService)
  destroy = inject(DestroyRef)
  ngOnInit() {
   const sub = this.fireService.getContentData().subscribe((data) => {
      if (data) {
        this.date.set(data.date);
        this.firstName.set(data.firstName);
        this.lastName.set(data.lastName);
        this.color.set(data.color);
      }
    });
   this.destroy.onDestroy(()=>{
     sub.unsubscribe()
   })
  }


}
