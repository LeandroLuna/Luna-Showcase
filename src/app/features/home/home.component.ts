import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Output() changeView: EventEmitter<void> = new EventEmitter<void>();
  
  constructor(private router: Router) { }

  onClick(){
    this.changeView.emit();
    this.router.navigate(['/portfolio']);
  }
}
