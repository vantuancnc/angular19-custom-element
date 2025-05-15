import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hello-world',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="custom-element-container">
      <h2>Hello từ Custom Element!</h2>
      <p>Đây là một custom element được tạo bằng Angular 19</p>
      <button (click)="increment()">Đã click {{ count }} lần</button>
    </div>
  `,
  styles: [`
    .custom-element-container {
      border: 2px solid #3f51b5;
      border-radius: 8px;
      padding: 16px;
      margin: 16px;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }
    
    h2 {
      color: #3f51b5;
      margin-top: 0;
    }
    
    button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    
    button:hover {
      background-color: #303f9f;
    }
  `]
})
export class HelloWorldComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
}