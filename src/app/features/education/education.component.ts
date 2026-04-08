import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { TimelineItem } from '../../core/models';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timelineItems: TimelineItem[] = [];

  constructor(private portfolioDataService: PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioDataService.getTimeline().subscribe(
      items => this.timelineItems = items
    );
  }
}
