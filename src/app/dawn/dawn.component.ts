import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-dawn',
  templateUrl: './dawn.component.html',
  styleUrls: ['./dawn.component.css']
})
export class DawnComponent {
  constructor(private counterService: CounterService) { }

  increment() {
    this.counterService.number++;
  }
}
