import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="counter-container">
      <h3>Counter Component</h3>
      <div class="counter-display">{{ counter }}</div>
      <div class="counter-controls">
        <button (click)="decrement()">-</button>
        <button (click)="increment()">+</button>
      </div>
      <button (click)="reset()" class="reset-button">Reset</button>
    </div>
  `,
  styles: [`
    .counter-container {
      border: 2px solid #ff4081;
      border-radius: 8px;
      padding: 16px;
      margin: 16px;
      background-color: #fff9f9;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    
    h3 {
      color: #ff4081;
      margin-top: 0;
    }
    
    .counter-display {
      font-size: 48px;
      margin: 16px 0;
      font-weight: bold;
      color: #333;
    }
    
    .counter-controls {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-bottom: 16px;
    }
    
    button {
      background-color: #ff4081;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 16px;
      min-width: 48px;
    }
    
    .reset-button {
      background-color: #757575;
    }
    
    button:hover {
      opacity: 0.9;
    }
  `]
})
export class CounterComponent {
  counter = 0;
  
  increment() {
    this.counter++;
  }
  
  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
  
  reset() {
    this.counter = 0;
  }
}