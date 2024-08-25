import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fnr-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frame.component.html',
})
export class FrameComponent {
  @Input() fnrFrameStyle: string = 'bg-[#00C6AE]';
}
