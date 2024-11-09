import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChartModule, NavbarComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  stations = [1, 2, 3,4,5];
  stats = [
    { title: '71,028', description: 'Total Value EGP', change: '↑ 2%', color: 'green' },
    { title: '20,000', description: 'Total Sales m²', change: '↑ 0.2m²', color: 'green' },
    { title: '20,000', description: 'Avg Sales m²', change: '↓ 20m²', color: 'red' },
    { title: '1,567', description: 'Total Transaction Count', change: '↑ 20', color: 'green' }
  ];
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      
      this.data = {
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
              {
                  label: 'My First dataset',
                  borderColor: documentStyle.getPropertyValue('--blue-400'),
                  pointBackgroundColor: documentStyle.getPropertyValue('--blue-400'),
                  pointBorderColor: documentStyle.getPropertyValue('--blue-400'),
                  pointHoverBackgroundColor: textColor,
                  pointHoverBorderColor: documentStyle.getPropertyValue('--blue-400'),
                  data: [65, 59, 90, 81, 56, 55, 40],
                  tension: 0.2
              },
              {
                  label: 'My Second dataset',
                  borderColor: documentStyle.getPropertyValue('--blue-400'),
                  pointBackgroundColor: documentStyle.getPropertyValue('--blue-400'),
                  pointBorderColor: documentStyle.getPropertyValue('--blue-400'),
                  pointHoverBackgroundColor: textColor,
                  pointHoverBorderColor: documentStyle.getPropertyValue('--blue-400'),
                  data: [28, 48, 40, 19, 96, 27, 100],
                  tension: 0
              }
          ]
      };
      
      this.options = {
          plugins: {
              legend: {
                  // labels: {
                  //     color: textColor
                  // }
                  display:false
              }
          },
          scales: {
              r: {
                  grid: {
                      color: textColorSecondary
                  },
                  pointLabels: {
                      color: textColorSecondary
                  },
                  

              }
          }
      };
  }
}
