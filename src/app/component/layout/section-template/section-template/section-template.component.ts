import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-template',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './section-template.component.html',
  styleUrl: './section-template.component.css'
})
export class SectionTemplateComponent {
  @Input() sectionTitle: string = "";
  @Input() sectionTitleAlignment: "left" | "middle" | "right" = "left";
  @Input() sectionClassName: string = "";
}
