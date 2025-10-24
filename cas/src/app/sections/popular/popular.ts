import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsService } from '../../services/deals-service';
import { Deal } from '../../models/deal';

@Component({
  selector: 'app-popular',
  imports: [CommonModule],
  templateUrl: './popular.html',
  styleUrl: './popular.scss'
})
export class Popular {
deals: Deal[] = [];

  constructor(private dealsService: DealsService) {}

  ngOnInit(): void {
    this.dealsService.getDeals().subscribe(data => {
      this.deals = data;
    });
  }
}
