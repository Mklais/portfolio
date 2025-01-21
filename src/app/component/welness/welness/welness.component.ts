import { Component, OnInit } from '@angular/core';
import { WellnessService as WellnessService } from '../../../service/wellness/welness.service';
import { log } from 'console';

@Component({
  selector: 'app-wellness',
  standalone: true,
  imports: [],
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
