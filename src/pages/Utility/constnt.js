import { Button } from "reactstrap";

const CONSTANT = {
  MENU_ITEM: [
    {
      id: 1,
      title: "Analytics",
      submenu: [
        {
          id: 1,
          className: "waves-effect",
          to: "/Report",
          lable: "Report",
          icon: "bx bxs-report",
        },
        {
          id: 2,
          className: "waves-effect",
          to: "/traking",
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
              to: "/admins",
              lable: "Admins",
            },
            {
              id: 2,
              to: "/clients",
              lable: "Clients",
            },
            {
              id: 3,
              to: "/drivers",
              lable: "Drivers",
            },
            {
              id: 3,
              to: "/transporter",
              lable: "Transporter",
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
              to: "/vehicles",
              lable: "Vehicle List",
            },
            {
              id: 2,
              to: "/vehicletype",
              lable: "Vehicle Type",
            },
          ],
        },
        {
          id: 3,
          className: "waves-effect",
          to: "/trip",
          lable: "trip",
          icon: "bx bxs-paste",
        },
        {
          id: 4,
          className: "waves-effect",
          to: "/Plant",
          lable: "Plant",
          icon: "bx bxs-factory",
        },
      ],
    },
  ],

  DATA_TABLE_COLUME: {
    admin: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Email ID",
        field: "email",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
      },
    ],
  },
};

const STATIC_DATA = {
  admin: [
    {
      no: 1,
      email: "admin@gmail.com",
      action: (
        <Button
          color="danger"
          className="btn btn-danger waves-effect waves-light"
        >
          Delete
        </Button>
      ),
    },
    {
      no: 1,
      email: "admin@gmail.com",
      action: (
        <Button
          color="danger"
          className="btn btn-danger waves-effect waves-light"
        >
          Delete
        </Button>
      ),
    },
    {
      no: 1,
      email: "admin@gmail.com",
      action: (
        <Button
          color="danger"
          className="btn btn-danger waves-effect waves-light"
        >
          Delete
        </Button>
      ),
    },
  ],
};

export const getTableData = (dataKey, data) => {
  return {
    columns: CONSTANT.DATA_TABLE_COLUME[dataKey],
    rows: data || STATIC_DATA[dataKey],
  };
};

export default CONSTANT;
