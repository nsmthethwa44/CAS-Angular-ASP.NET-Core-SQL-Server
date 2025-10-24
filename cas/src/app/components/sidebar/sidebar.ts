import { Component, Input } from '@angular/core';
import { SidebarLinks } from '../../constants/sidebar-links';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth-service';
import { SidebarService } from '../../services/sidebar-service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
@Input() role: 'admin' | 'bidder' | 'owner' = 'owner';
constructor(private router: Router,private authSer:AuthService, private sidebarSer: SidebarService){}

 get links() {
    return SidebarLinks[this.role] || [];
  }

logout(): void {
   Swal.fire({
    icon: 'success',
    title: 'Logging Out',
    text: 'Successfully logged out.',
    timer: 1800,
    showConfirmButton: false
  });
  setTimeout(() => {
    this.authSer.logout();
  this.router.navigate(['/']);
  }, 5000);
  
}

closeSidebar(){
  this.sidebarSer.closeSidebar();
}

}
