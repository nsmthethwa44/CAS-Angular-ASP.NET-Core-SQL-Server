import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard-component/admin-dashboard-component';
import { AdminOverviewComponent } from './admin/admin-overview-component/admin-overview-component';
import { AdminCarListingComponent } from './admin/admin-car-listing-component/admin-car-listing-component';
import { SearchCar } from './components/search-car/search-car';
import { AdminManageAuction } from './admin/admin-manage-auction/admin-manage-auction';
import { OwnerDashboardComponent } from './owner/owner-dashboard-component/owner-dashboard-component';
import { OwnerOverviewComponent } from './owner/owner-overview-component/owner-overview-component';
import { BidderDashboardComponent } from './bidder/bidder-dashboard-component/bidder-dashboard-component';
import { BidderOverviewComponent } from './bidder/bidder-overview-component/bidder-overview-component';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { AdminDealsComponent } from './admin/admin-deals-component/admin-deals-component';
import { AuthGuard } from './core/guards/auth-guard';
import { RoleGuard } from './core/guards/role-guard';
import { OwnerCarsComponent } from './owner/owner-cars-component/owner-cars-component';
import { OwnerBidsComponent } from './owner/owner-bids-component/owner-bids-component';
import { OwnerAuctionComponent } from './owner/owner-auction-component/owner-auction-component';
import { BidderMyBidsComponent } from './bidder/bidder-my-bids-component/bidder-my-bids-component';
import { BidderBrowseComponent } from './bidder/bidder-browse-component/bidder-browse-component';
import { LandingPage } from './pages/landing-page/landing-page';
import { Home } from './pages/home/home';
import { UserProfile } from './components/user-profile/user-profile';
import { About } from './pages/about/about';
import { Cars } from './pages/cars/cars';
import { Blog } from './pages/blog/blog';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' },
        children:[
            {path: '', component: AdminOverviewComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' },},
            {path: 'listing', component: AdminCarListingComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' },},
            {path: 'search', component: SearchCar, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' },},
            {path: 'manage-auction', component: AdminManageAuction, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' },},
            {path: 'deals', component: AdminDealsComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Admin' },}
        ]
    },
    {path: 'owner', component: OwnerDashboardComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Owner' },
        children:[
            {path: '', component: OwnerOverviewComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Owner' },},
            {path: 'my-cars', component: OwnerCarsComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Owner' },},
            {path: 'bids-on-my-cars', component: OwnerBidsComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Owner' },},
            {path: 'my-auctions', component: OwnerAuctionComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Owner' },},
            {path: 'my-profile', component: UserProfile, canActivate: [AuthGuard, RoleGuard], data: { role: 'Owner' },},
        ]
    },
    {path: 'bidder', component: BidderDashboardComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'Bidder' },
        children:[
            {path: '', component: BidderOverviewComponent,canActivate: [AuthGuard, RoleGuard], data: { role: 'Bidder' },},
            {path: 'my-bids', component: BidderMyBidsComponent,canActivate: [AuthGuard, RoleGuard], data: { role: 'Bidder' },},
            {path: 'browse-auction', component: BidderBrowseComponent,canActivate: [AuthGuard, RoleGuard], data: { role: 'Bidder' },},
             {path: 'my-profile', component: UserProfile, canActivate: [AuthGuard, RoleGuard], data: { role: 'Bidder' },},
        ]
    },
       {path: '', component: LandingPage,
        children:[
            {path: '', component: Home},
            {path: 'about', component: About},
            {path: 'cars', component: Cars},
            {path: 'blog', component: Blog},
            {path: 'contact', component: Contact},
        ]
    },
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: "**", redirectTo: ""},
];
