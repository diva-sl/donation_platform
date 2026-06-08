export const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Campaigns",
    path: "/campaigns",
  },
  {
    title: "Causes",
    children: [
      {
        title: "Education Support",
        path: "/causes/education",
        icon: "🎓",
      },
      {
        title: "Medical Support",
        path: "/causes/medical",
        icon: "🏥",
      },
      {
        title: "Food Donation",
        path: "/causes/food",
        icon: "🍲",
      },
      {
        title: "Old Age Care",
        path: "/causes/old-age",
        icon: "👴",
      },
      {
        title: "Emergency Relief",
        path: "/causes/emergency",
        icon: "🚑",
      },
      {
        title: "Community Welfare",
        path: "/causes/community",
        icon: "❤️",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
