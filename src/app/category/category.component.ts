import { TagModule } from 'primeng/tag';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Category } from '../category';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    TagModule,
    InputTextModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  /**
   *
   */
  constructor(private _DataService: DataService) {}
  category!: Category[];
  value!: string;

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    this._DataService.AllCate().subscribe({
      next: (res) => {
        this.category = res;
      },
    });
  }
  getSeverity(status: string) {
    switch (status) {
      case 'true':
        return 'success';
      case 'false':
        return 'warning';
    }
    return;
  }
}
