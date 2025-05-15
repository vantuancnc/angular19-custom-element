import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CounterComponent } from './app/counter/counter.component';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';


async function bootstrapCustomElements() {
  try {
    // Tạo ứng dụng Angular mà không bootstrap AppComponent
    const appRef = await createApplication({
      providers: []
    });
    
    console.log('Angular application created for custom elements');
    
    // Tạo và đăng ký hello-world custom element
    const HelloWorldElement = createCustomElement(HelloWorldComponent, {
      injector: appRef.injector
    });
    customElements.define('hello-world-element', HelloWorldElement);
    console.log('Custom element "hello-world-element" registered successfully');
    
    // Tạo và đăng ký counter custom element
    const CounterElement = createCustomElement(CounterComponent, {
      injector: appRef.injector
    });
    customElements.define('counter-element', CounterElement);
    console.log('Custom element "counter-element" registered successfully');
    
  } catch (error) {
    console.error('Failed to bootstrap custom elements:', error);
  }
}

// Khởi chạy quá trình đăng ký
bootstrapCustomElements();