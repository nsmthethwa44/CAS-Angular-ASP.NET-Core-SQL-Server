export const SidebarLinks = {
  admin: [
    {icon: "fa-solid fa-layer-group",  label: 'Dashboard', path: '/admin' },
    {icon: "fa-solid fa-car", label: 'Manage Cars', path: '/admin/listing' },
    {icon: "fa-solid fa-magnifying-glass", label: 'Search', path: '/admin/search' },
    {icon: "fa-solid fa-gavel", label: 'Manage Auctions', path: '/admin/manage-auction' },
    {icon: "fa-solid fa-cash-register", label: 'Deals', path: '/admin/deals' },
    // {icon: "fa-solid fa-chart-line", label: 'Reports', path: '/admin/listing' },
    // {icon: "fa-solid fa-money-bill-wave", label: 'Transactions', path: '/admin/listing' },
  ],
  owner: [
    {icon: "fa-solid fa-layer-group",  label: 'Dashboard', path: '/owner' },
    {icon: "fa-solid fa-car", label: 'My Cars', path: '/owner/my-cars' },
    {icon: "fa-solid fa-gavel", label: 'My Auctions', path: '/owner/my-auctions' },
     {icon: "fa-solid fa-money-bill", label: 'Bids on My Cars', path: '/owner/bids-on-my-cars' },
    { icon: "fa-solid fa-user",label: 'My Profile', path: '/owner/profile' },
  ],
  bidder: [
    {icon: "fa-solid fa-layer-group",  label: 'Dashboard', path: '/bidder' },
    {icon: "fa-solid fa-search", label: 'Browse Auctions', path: '/bidder/browse-auction' },
    {icon: "fa-solid  fa-money-check", label: 'My Bids', path: '/bidder/my-bids' },
    {icon: "fa-solid fa-user", label: 'My Profile', path: '/bidder/profile' },
  ]
};




