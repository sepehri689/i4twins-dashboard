export interface navLink {
    label: string;
    caption?: string;
    img?: string;
    route: string;
    showLogo?: boolean;
    showMenu?: boolean;
    showArrow?: boolean;
    rightIcon?: string;
    showRight?: boolean;
    middleIcon?: string;
    showMiddle?: boolean;
}

export const navLinks: navLink[] = [
    {
        label: "Form",
        img: '/assets/icon/top-nav/therapists.svg',
        route: '/dashboard-main',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'Ticket',
        img: '/assets/icon/top-nav/fields.svg',
        route: '/ticket',
        showLogo: true,
        showMenu: true,
    },
    {
        label: '3D',
        img: '/assets/icon/top-nav/services.svg',
        route: '/home/favorites',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'Terminal',
        img: '/assets/icon/top-nav/articles.svg',
        route: '/cart',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'Node',
        img: '/assets/icon/top-nav/support.svg',
        route: '/home/data-table',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'Help',
        img: '/assets/icon/top-nav/faq.svg',
        route: '/home/fields',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'FAQ',
        img: '/assets/icon/top-nav/about.svg',
        route: '/home/products',
        showLogo: true,
        showMenu: true,
    },
];

export const navData: navLink[] = [
    {
        label: "Form",
        img: '/assets/icon/top-nav/therapists.svg',
        route: '/dashboard-main',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'Ticket',
        img: '/assets/icon/top-nav/fields.svg',
        route: '/ticket',
        showLogo: true,
        showMenu: true,
    },
    {
        label: '3D',
        img: '/assets/icon/top-nav/fields.svg',
        route: '/ticket/ticket-details',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'Terminal',
        img: '/assets/icon/top-nav/services.svg',
        route: '/home/favorites',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'Node',
        img: '/assets/icon/top-nav/articles.svg',
        route: '/cart',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'Help',
        img: '/assets/icon/top-nav/support.svg',
        route: '/home/data-table',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'Support',
        img: '/assets/icon/top-nav/faq.svg',
        route: '/home/fields',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'FAQ',
        img: '/assets/icon/top-nav/about.svg',
        route: '/home/products',
        showLogo: true,
        showMenu: true,
    },
    {
        label: 'جزییات محصول',
        img: '/assets/icon/top-nav/about.svg',
        route: '/home/products/details',
        showArrow: true,
        showMenu: true,
    },
    {
        label: 'ورود / ثبت نام',
        route: '/home/sign-in',
        showArrow: true,
        showMenu: true,
    },
];

