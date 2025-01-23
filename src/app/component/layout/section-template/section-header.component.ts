import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {DividerModule} from 'primeng/divider';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule
  ],
  templateUrl: './section-header.component.html',
  styleUrls: [
    './section-header.component.css',
  ]
})
export class SectionHeaderComponent {
  @Input() sectionHeaderAlignment: "flex-start" | "center" | "flex-end" = "flex-start";
  @Input() sectionTitle: string = "";
  @Input() subHeader: string = "";
}