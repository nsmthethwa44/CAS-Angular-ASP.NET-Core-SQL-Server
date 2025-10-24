import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DealsService } from '../../services/deals-service';
import { Deal } from '../../models/deal';

@Component({
  selector: 'app-why-choose-us',
  imports: [RouterLink, CommonModule],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss'
})
export class WhyChooseUs {
deals: Deal[] = [];

  constructor(private dealsService: DealsService) {}

  ngOnInit(): void {
    this.dealsService.getDeals().subscribe(data => {
      this.deals = data;
    });
  }
}
