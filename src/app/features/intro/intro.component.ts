import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('waveContainer', { static: false }) waveContainer!: ElementRef;
  
  mouseX: number = 0;
  mouseY: number = 0;
  private animationFrameId: number | null = null;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.initWaveEffect();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.waveContainer?.nativeElement) {
      this.waveContainer.nativeElement.removeEventListener('mousemove', this.onMouseMove.bind(this));
      this.waveContainer.nativeElement.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
    }
  }

  initWaveEffect(): void {
    if (this.waveContainer?.nativeElement) {
      this.waveContainer.nativeElement.addEventListener('mousemove', this.onMouseMove.bind(this));
      this.waveContainer.nativeElement.addEventListener('mouseleave', this.onMouseLeave.bind(this));
      this.animateWaves();
    }
  }

  onMouseMove(event: MouseEvent): void {
    const rect = this.waveContainer.nativeElement.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }

  onMouseLeave(): void {
    this.mouseX = 0;
    this.mouseY = 0;
  }

  animateWaves(): void {
    const updateWaves = () => {
      if (this.waveContainer?.nativeElement) {
        const svg = this.waveContainer.nativeElement.querySelector('svg');
        if (svg) {
          const paths = svg.querySelectorAll('path');
          const rect = this.waveContainer.nativeElement.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const mouseX = this.mouseX || centerX;
          const mouseY = this.mouseY || centerY;
          
          // Calculate distance from mouse to center
          const deltaX = mouseX - centerX;
          const deltaY = mouseY - centerY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
          const normalizedDistance = Math.min(distance / maxDistance, 1);
          
          paths.forEach((path: SVGPathElement, index: number) => {
            // Different intensity for each wave layer
            const layerIndex = Math.floor(index / 15);
            const intensity = 1 - (layerIndex * 0.15);
            
            // Calculate wave effect based on mouse position
            const angle = Math.atan2(deltaY, deltaX);
            const waveFrequency = 0.02 + (index % 5) * 0.01;
            const waveAmplitude = normalizedDistance * 40 * intensity;
            
            // Create wave motion
            const time = Date.now() / 1000;
            const waveX = Math.cos(angle) * waveAmplitude * (1 - normalizedDistance * 0.5);
            const waveY = Math.sin(angle) * waveAmplitude * (1 - normalizedDistance * 0.5) + 
                         Math.sin(time * 2 + index * waveFrequency) * 8 * intensity;
            
            // Apply transform with smooth easing
            path.style.transform = `translate(${waveX}px, ${waveY}px)`;
          });
        }
      }
      this.animationFrameId = requestAnimationFrame(updateWaves);
    };
    updateWaves();
  }

  startPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }
}

