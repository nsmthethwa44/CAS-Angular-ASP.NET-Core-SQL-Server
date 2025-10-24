import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsService } from '../../services/deals-service';
import { Deal } from '../../models/deal';

@Component({
  selector: 'app-used-cars',
  imports: [CommonModule],
  templateUrl: './used-cars.html',
  styleUrl: './used-cars.scss'
})
export class UsedCars {
deals: Deal[] = [];

  constructor(private dealsService: DealsService) {}

  ngOnInit(): void {
    this.dealsService.getDeals().subscribe(data => {
      this.deals = data;
    });
  }
}
