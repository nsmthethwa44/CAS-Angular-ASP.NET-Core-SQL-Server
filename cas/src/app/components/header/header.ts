import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth-service';
import { baseUrl } from '../../env/env';
import { SidebarService } from '../../services/sidebar-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit{
user!: User;
private baseUrl = baseUrl;
constructor(private authSer: AuthService, private sidebarSer: SidebarService){}

getUser(){
  this.user = this.authSer.getProfileFromToken();
}

ngOnInit(): void {
this.getUser();
}

  getImageUrl(path: string | undefined): string{
    return `${this.baseUrl}${path}`
  }

        toggleSidebar(){
    this.sidebarSer.toggleSidebar();
  }

}
