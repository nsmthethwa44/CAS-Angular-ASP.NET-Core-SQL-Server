import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Copyright } from "../../components/copyright/copyright";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-owner-dashboard-component',
  imports: [RouterOutlet, Copyright, Sidebar, Header],
  templateUrl: './owner-dashboard-component.html',
  styleUrl: './owner-dashboard-component.scss'
})
export class OwnerDashboardComponent {

}
