import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WellnessService } from './service/wellness/welness.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    LayoutComponent
  ],
  providers: [WellnessService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'klais-portfolio';
}
