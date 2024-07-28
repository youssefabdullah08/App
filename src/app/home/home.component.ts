import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  res: any;
  bool:boolean=true
  constructor(private _DataService: DataService) {}
  ngOnInit(): void {
    this.getdata();
  }

  getdata(): void {
    this._DataService.mainProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.res=res.data
      },
    });
  }
}
