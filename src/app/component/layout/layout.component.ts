import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeroComponent, AboutComponent, SkillsComponent, ContactComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
