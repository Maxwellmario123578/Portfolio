import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../../core/models';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-volunteers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {
  volunteers: Volunteer[] = [];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getVolunteers().subscribe(
      data => this.volunteers = data
    );
  }
}
