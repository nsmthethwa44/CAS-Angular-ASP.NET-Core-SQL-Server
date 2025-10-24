import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Copyright } from "../../components/copyright/copyright";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-admin-dashboard-component',
  imports: [RouterOutlet, Copyright, Sidebar, Header],
  templateUrl: './admin-dashboard-component.html',
  styleUrl: './admin-dashboard-component.scss'
})
export class AdminDashboardComponent {

}
