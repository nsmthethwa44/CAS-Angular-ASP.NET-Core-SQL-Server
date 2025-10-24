import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Copyright } from "../../components/copyright/copyright";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-bidder-dashboard-component',
  imports: [RouterOutlet, Copyright, Sidebar, Header],
  templateUrl: './bidder-dashboard-component.html',
  styleUrl: './bidder-dashboard-component.scss'
})
export class BidderDashboardComponent {

}
