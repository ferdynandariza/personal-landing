import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { FrameComponent } from '../../shared/frame/frame.component';

@Component({
  selector: 'fnr-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FrameComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
