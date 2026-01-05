import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ToolCardComponent } from './components/tool-card/tool-card.component';
import { MOCK_TOOLS } from './data/mock-data';
import { AiTool } from './models/tool.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, ToolCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tools: AiTool[] = MOCK_TOOLS;
}
