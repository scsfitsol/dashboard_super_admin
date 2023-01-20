const CONSTANT = {
  MENU_ITEM: [
    {
      id: 1,
      title: "Analytics",
      submenu: [
        {
          id: 1,
          className: "waves-effect",
          to: "/#",
          lable: "Report",
          icon: "bx bxs-report",
        },
        {
          id: 2,
          className: "waves-effect",
          to: "/test",
          lable: "Track vehicles",
          icon: "bx bxs-map",
        },
      ],
    },
    {
      id: 2,
      title: "Operation",
      submenu: [
        {
          id: 1,
          className: "has-arrow waves-effect",
          to: "/calendar",
          lable: "User",
          icon: "bx bxs-user-detail",
          submenu: [
            {
              id: 1,
              to: "/dashboard",
              lable: "Admins",
            },
            {
              id: 2,
              to: "/dashboard",
              lable: "Clients",
            },
            {
              id: 3,
              to: "/dashboard",
              lable: "Drivers",
            },
          ],
        },
        {
          id: 2,
          className: "has-arrow waves-effect",
          to: "/calendar",
          lable: "Vehicles",
          icon: "bx bxs-truck",
          submenu: [
            {
              id: 1,
              to: "/dashboard",
              lable: "Vehicle List",
            },
            {
              id: 2,
              to: "/dashboard",
              lable: "Vehicle Type",
            },
          ],
        },
      ],
    },
  ],
};

export default CONSTANT;
