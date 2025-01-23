import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-template',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './section-template.component.html',
  styleUrls: [
    './section-template.component.css',
  ]
})
export class SectionTemplateComponent {
  @Input() sectionTitle: string = "";
  @Input() sectionHeaderAlignment: "flex-start" | "center" | "flex-end" = "flex-start";
  @Input() sectionClassName: string = "";
}