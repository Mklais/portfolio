import { Component, OnInit } from '@angular/core';
import { WellnessService } from '../../service/wellness/wellness.service';
import { SectionTemplateComponent } from "../layout/section-template/section-template/section-template.component";

@Component({
  selector: 'app-wellness',
  standalone: true,
  imports: [SectionTemplateComponent],
  templateUrl: './welness.component.html',
  styleUrl: './welness.component.css'
})
export class WellnessComponent implements OnInit {

  constructor(private wellnessService: WellnessService) {
  }

  ngOnInit(): void {
    this.wellnessService.reAuthorize().subscribe({
      next: response => {
        const accessToken = response.access_token;
        this.fetchActivities(accessToken);
      }
    });
  }

  private fetchActivities(accessToken: string) {
    this.wellnessService.findActivities(accessToken).subscribe({
      next: result => {
        console.log(result);
      }
    })
  }
}
