import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyNewModuleModule } from './my-new-module/my-new-module.module';
import { MyNewComponentComponent } from './my-new-module/my-new-component/my-new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyNewModuleModule, MyNewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-angular-app';
}
