import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiTool } from '../../models/tool.interface';

@Component({
  selector: 'app-tool-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tool-card.component.html',
  styleUrls: ['./tool-card.component.css']
})
export class ToolCardComponent {
  @Input() tool!: AiTool;
}
