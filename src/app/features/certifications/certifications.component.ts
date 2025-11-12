import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Certification } from '../../core/models';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getCertifications().subscribe(
      data => this.certifications = data
    );
  }
}
