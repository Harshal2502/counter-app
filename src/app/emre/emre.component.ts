import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-emre',
  templateUrl: './emre.component.html',
  styleUrls: ['./emre.component.css']
})
export class EmreComponent {
  constructor(private counterService: CounterService) { }

  decrement() {
    this.counterService.number--;
  }
}
