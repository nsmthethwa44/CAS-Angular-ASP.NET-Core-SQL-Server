import { Component } from '@angular/core';
import { DealsService } from '../../services/deals-service';
import { Deal } from '../../models/deal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-deals-component',
  imports: [CommonModule],
  templateUrl: './admin-deals-component.html',
  styleUrl: './admin-deals-component.scss'
})
export class AdminDealsComponent {
deals: Deal[] = [];

  constructor(private dealsService: DealsService) {}

  ngOnInit(): void {
    this.dealsService.getDeals().subscribe(data => {
      this.deals = data;
    });
  }
}
