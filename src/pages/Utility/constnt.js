import { useState } from "react";
import { Button, Tooltip } from "reactstrap";

export const EditButton = ({ onClick = {} }) => {
  const [ttop, setttop] = useState(false);
  return (
    <>
      <Tooltip
        placement="top"
        isOpen={ttop}
        target="edit"
        toggle={() => {
          setttop(!ttop);
        }}
      >
        Edit
      </Tooltip>
      <Button
        color="primary"
        className="btn btn-primary waves-effect waves-light me-3"
        onClick={onClick}
        id="edit"
      >
        <i className="bx bxs-edit-alt"></i>
      </Button>
    </>
  );
};
export const AllocateAndNotAllocate = (props) => {
  const { value } = props;
  const [tip, setTip] = useState()
  return (
    <>
      {value
        ? <i className="bx bx-check-circle text-success fs-3"></i>
        : <i className="bx bx-x-circle text-danger fs-3"></i>
      }
    </>
  );
};

export const ToolTipButton = ({ id, msg }) => {
  const [ttop, setttop] = useState(false);
  return (
    <>
      <Tooltip
        placement="top"
        isOpen={ttop}
        target={id}
        toggle={() => {
          setttop(!ttop);
        }}
      >
        {msg}
      </Tooltip>
      <i
        id={id}
        className="bx bx-info-circle fs-3"
        style={{ cursor: "pointer" }}
      ></i>
    </>
  );
};

export const MonthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const TAB_DATA = {
  CLIENT_TAB: [
    {
      name: 'Trip',
      tabId: 1
    },
    {
      name: 'Site',
      tabId: 2
    }
  ],
  VEHICLES_TAB: [
    {
      name: 'Trip',
      tabId: 1
    },
    {
      name: 'Site',
      tabId: 2
    }
  ],
  DRIVER_TAB: [
    {
      name: 'Trip',
      tabId: 1
    },
  ],
  VEHICLES_TAB: [
    {
      name: 'Trip',
      tabId: 1
    },
  ],
}

export const MyData = {
  data: {},
};

const Category = {
  1: "Pending",
  2: "On Going",
  3: "Completed",
};

const STATUS_COLOR = {
  1: 'bg-soft-danger text-danger p-1',
  2: 'bg-soft-primary text-primary p-1',
  3: 'bg-soft-success text-success p-1',
}
export const StatusButton = ({ value, onClick = {} }) => {
  return <p className={STATUS_COLOR[value]} style={{ borderRadius: '4px', cursor: 'pointer', width: '80px' }} onClick={onClick}>{Category[value]}</p>
}

export const DeleteButton = ({ onClick = {} }) => {
  const [ttop, setttop] = useState(false);
  return (
    <>
      <Tooltip
        placement="top"
        isOpen={ttop}
        target="delete"
        toggle={() => {
          setttop(!ttop);
        }}
      >
        Delete
      </Tooltip>

      <Button
        color="primary"
        className="btn btn-danger waves-effect waves-light"
        onClick={onClick}
        id="delete"
      >
        <i className="bx bxs-trash-alt"></i>
      </Button>
    </>
  );
};

const CONSTANT = {
  // BASE_URL: process.env.REACT_APP_BASE_URL,
  BASE_URL: "http://65.1.223.112:3001/api/v1",
  API: {
    adminLogin: {
      endpoint: `/admin/login`,
      type: "POST",
    },
    adminUpdate: {
      endpoint: `/admin/updateMe`,
      type: "PATCH",
    },
    getMe: {
      endpoint: `/admin/getMe`,
      type: "GET",
    },
    getAllClient: {
      endpoint: `/client`,
      type: "GET",
    },
    deleteClient: {
      endpoint: `/client`,
      type: "DELETE",
    },
    addClient: {
      endpoint: `/client`,
      type: "POST",
    },
    getAllDriver: {
      endpoint: `/driver`,
      type: "GET",
    },
    addDriver: {
      endpoint: `/driver`,
      type: "POST",
    },
    getAllTransporter: {
      endpoint: `/transporter`,
      type: "GET",
    },
    addTransporter: {
      endpoint: `/transporter`,
      type: "POST",
    },
    getAllVehicle: {
      endpoint: `/vehicle`,
      type: "GET",
    },
    addVehicle: {
      endpoint: `/vehicle`,
      type: "POST",
    },
    getAllTrip: {
      endpoint: `/trip`,
      type: "GET",
    },
    addTrip: {
      endpoint: `/trip`,
      type: "POST",
    },
    getAllPlant: {
      endpoint: `/plant`,
      type: "GET",
    },
    addPlant: {
      endpoint: `/plant`,
      type: "POST",
    },
    getAnalysis: {
      endpoint: `/analysis`,
      type: "GET",
    },
    getMapLocation: {
      endpoint: `/location/15`,
      type: "GET",
    },
  },

  MENU_ITEM: [
    {
      id: 1,
      title: "Analytics",
      submenu: [
        {
          id: 1,
          className: "waves-effect",
          to: "/Dashboard",
          lable: "Dashboard",
          icon: "bx bxs-report",
        },
        {
          id: 2,
          className: "waves-effect",
          to: "/tracking",
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
            // {
            //   id: 1,
            //   to: "/admins",
            //   lable: "Admins",
            // },
            {
              id: 2,
              to: "/clients",
              lable: "Clients",
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
          className: "waves-effect",
          to: "/drivers",
          lable: "Drivers",
          icon: "fas fa-user",
        },
        {
          id: 2,
          className: "waves-effect",
          to: "/vehicles",
          lable: "Vehicles",
          icon: "bx bxs-truck",
        },
        {
          id: 3,
          className: "waves-effect",
          to: "/trip",
          lable: "Trips",
          icon: "bx bxs-paste",
        },
        {
          id: 4,
          className: "waves-effect",
          to: "/sites",
          lable: "Sites",
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
        sort: "disabled",
      },
    ],
    client: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Name",
        field: "clientName",
        sort: "asc",
        color: 'success',
      },
      {
        label: "Client ID",
        field: "clientId",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",
        sort: "disabled",
      },
    ],
    driver: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Name",
        field: "driverName",
        sort: "asc",
      },
      {
        label: "Driving license",
        field: "drivingLicenseImage",
        sort: "asc",
      },
      {
        label: "Mobile Number",
        field: "mobile",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",
        sort: "disabled",
      },
    ],
    vehicles: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Registration Number",
        field: "RegistrationNumbers",
        sort: "asc",
      },
      {
        label: "Manufacturer",
        field: "manufacture",
        sort: "asc",
      },
      {
        label: "Fuel Type",
        field: "fuelType",
        sort: "asc",
      },
      {
        label: "Transporter Name",
        field: "transporterName",
        sort: "asc",
      },
      {
        label: "Capacity (Turn)",
        field: "capacity",
        sort: "asc",
      },
      {
        label: "Mileage",
        field: "mileage",
        sort: "asc",
      },
      // {
      //   label: "Total KMS Covered",
      //   field: "totalKmscovered",
      //   sort: "asc",
      // },
      // {
      //   label: "Engine Type",
      //   field: "engineType",
      //   sort: "asc",
      // },
      {
        label: "Allocate",
        field: "Allocated",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",
        sort: "disabled",
      },
    ],
    transporter: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Name",
        field: "TransporterName",
        sort: "asc",
      },
      {
        label: "GST Number",
        field: "gstNumber",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",
        sort: "disabled",
      },
    ],
    plant: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Client",
        field: "clientName",
        sort: "asc",
      },
      {
        label: "Unit Name",
        field: "unitName",
        sort: "asc",
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
      },
      {
        label: "GST Number",
        field: "GST",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",
        sort: "disabled",
      },
    ],
    trips: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Status",
        field: "statusData",
        sort: "asc",
      },
      {
        label: "Client Name",
        field: "clientName",
        sort: "asc",
      },
      {
        label: "Transporter Name",
        field: "transporterName",
        sort: "asc",
      },
      {
        label: "Plant Name",
        field: "plantName",
        sort: "asc",
      },
      {
        label: "Start Date and Time",
        field: "startDateAndTime",
        sort: "asc",
      },
      {
        label: "Source",
        field: "sourceLocation",
        sort: "asc",
      },
      {
        label: "Destination",
        field: "destinationLocation",
        sort: "asc",
      },
      {
        label: "Driver Name",
        field: "driverName",
        sort: "asc",
      },
      {
        label: "Driver’s Contact",
        field: "driverPhoneNumber",
        sort: "asc",
      },
      {
        label: "Vehicle Number",
        field: "vehicleNumber",
        sort: "asc",
      },
      {
        label: "Targetted Date & Time",
        field: "targetedDateAndTime",
        sort: "asc",
      },

      {
        label: "Carbon emit(LBS)",
        field: "totalCarbonEmit",
        sort: "asc",
      },
      {
        label: "CO2 Efficiency",
        field: "Co2efficiency",
        sort: "asc",
      },
      {
        label: "Action",
        field: "action",
        sort: "disabled",
      },
    ],
  },
  DATA_TABLE_COLUME_INFO: {
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
        sort: "disabled",
      },
    ],
    client: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Name",
        field: "clientName",
        sort: "asc",
        color: 'success',
      },
      {
        label: "Client ID",
        field: "clientId",
        sort: "asc",
      },
    ],
    driver: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Name",
        field: "driverName",
        sort: "asc",
      },
      {
        label: "Driving license",
        field: "drivingLicense",
        sort: "asc",
      },
      {
        label: "Mobile Number",
        field: "mobile",
        sort: "asc",
      },
    ],
    vehicles: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Registration Number",
        field: "RegistrationNumbers",
        sort: "asc",
      },
      {
        label: "Manufacturer",
        field: "manufacture",
        sort: "asc",
      },
      {
        label: "Fuel Type",
        field: "fuelType",
        sort: "asc",
      },
      {
        label: "Transporter Name",
        field: "transporterName",
        sort: "asc",
      },
      {
        label: "Capacity",
        field: "capacity",
        sort: "asc",
      },
      {
        label: "Mileage",
        field: "mileage",
        sort: "asc",
      },
      // {
      //   label: "Total KMS Covered",
      //   field: "totalKmscovered",
      //   sort: "asc",
      // },
      // {
      //   label: "Engine Type",
      //   field: "engineType",
      //   sort: "asc",
      // },
      {
        label: "Allocate",
        field: "allocate",
        sort: "asc",
      },
    ],
    transporter: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Name",
        field: "TransporterName",
        sort: "asc",
      },
      {
        label: "GST Number",
        field: "gstNumber",
        sort: "asc",
      },
    ],
    plant: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Client",
        field: "clientName",
        sort: "asc",
      },
      {
        label: "Unit Name",
        field: "unitName",
        sort: "asc",
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
      },
      {
        label: "GST Number",
        field: "GST",
        sort: "asc",
      },
    ],
    trips: [
      {
        label: "No",
        field: "no",
        sort: "asc",
      },
      {
        label: "Status",
        field: "statusData",
        sort: "asc",
        width: 200
      },
      {
        label: "Client Name",
        field: "clientName",
        sort: "asc",
      },
      {
        label: "Transporter Name",
        field: "transporterName",
        sort: "asc",
      },
      {
        label: "Plant Name",
        field: "plantName",
        sort: "asc",
      },
      {
        label: "Start Date and Time",
        field: "startDateAndTime",
        sort: "asc",
      },
      {
        label: "Source",
        field: "sourceLocation",
        sort: "asc",
      },
      {
        label: "Destination",
        field: "destinationLocation",
        sort: "asc",
      },
      {
        label: "Driver Name",
        field: "driverName",
        sort: "asc",
      },
      {
        label: "Driver’s Contact",
        field: "driverPhoneNumber",
        sort: "asc",
      },
      {
        label: "Vehicle Number",
        field: "vehicleNumber",
        sort: "asc",
      },
      {
        label: "Targetted Date & Time",
        field: "targetedDateAndTime",
        sort: "asc",
      },

      {
        label: "Carbon emit(LBS)",
        field: "totalCarbonEmit",
        sort: "asc",
      },
      {
        label: "CO2 Efficiency",
        field: "Co2efficiency",
        sort: "asc",
      },
    ],
  },

  FORM_FIELDS: {
    DRIVER: [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
        required: true,
      },
      {
        name: "mobile",
        label: "Mobile Number",
        placeholder: "Mobile Number",
        type: "mobileNumber",
        required: false,
      },
      // {
      //   name: "profilePic",
      //   label: "Profile Image",
      //   type: "file",
      //   required: false,
      // },
      {
        name: "drivingLicense",
        label: "Driving License",
        type: "file",
        required: true,
      },
    ],
    CLIENT: [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Client Email",
        placeholder: "Client Email",
        type: "text",
        required: false,
      },
      // {
      //   name: "profilePic",
      //   label: "Profile Pic",
      //   placeholder: "Profile Pic",
      //   type: "file",
      //   required: false,
      // },
      {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "text",
      },
    ],
    PLANT: [
      {
        name: "unitName",
        label: "Unit Name",
        placeholder: "Unit Name",
        type: "text",
        required: true,
      },
      {
        name: "location",
        label: "Location",
        placeholder: "Location",
        type: "text",
        required: true,
      },
      {
        name: "GST",
        label: "GST Number",
        placeholder: "GST Number",
        type: "text",
        required: true,
      },
    ],
    ADMIN_EDIT: [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
        required: false,
      },
      {
        name: "panCard",
        label: "Pan Card",
        type: "file",
        required: false,
      },
      {
        name: "aadharCard",
        label: "Adhara Card",
        type: "file",
        required: false,
      },
      {
        name: "anyOtherCompanySpecificId",
        label: "Other Company Specific Id",
        type: "file",
        required: false,
      },
      {
        name: "profilePic",
        label: "Profile Pic",
        type: "file",
        required: false,
      },
    ],
    TRANSPORTER: [
      {
        name: "transporterName",
        label: "Name",
        placeholder: "Name",
        type: "text",
        required: true,
      },
      {
        name: "gstNumber",
        label: "GST Number",
        placeholder: "GST Number",
        type: "text",
        required: true,
      },
    ],
    VEHICLES: [
      {
        name: "registrationNumber",
        label: "Registration Number",
        placeholder: "Registration Number",
        type: "text",
        required: true,
      },
      {
        name: "capacity",
        label: "Capacity",
        placeholder: "Capacity",
        type: "text",
        required: true,
      },
      {
        name: "fuelType",
        label: "Fuel Type",
        placeholder: "Fuel Type",
        type: "SingleSelect",
        required: true,
        options: [
          { label: "Petrol", value: "Petrol" },
          { label: "Diesel", value: "Diesel" },
          { label: "CNG", value: "CNG" },
          { label: "PLG", value: "PLG" },
        ],
      },
      {
        name: "manufacture",
        label: "Manufacturer",
        placeholder: "Manufacture",
        type: "text",
        required: true,
      },
      {
        name: "allocate",
        label: "Allocate",
        placeholder: "Allocate",
        type: "SingleSelect",
        required: true,
        options: [
          { label: "Allocated", value: true },
          { label: "Not Allocated", value: false },
        ],
      },
      {
        name: "mileage",
        label: "Mileage",
        placeholder: "Mileage",
        type: "text",
        required: true,
      },
    ],
    TRIP: [
      {
        name: "sourceLocation",
        label: "Source Location",
        placeholder: "Source Location",
        type: "GoogleAutoComplete",
        required: true,
      },
      {
        name: "destinationLocation",
        label: "Destination Location",
        placeholder: "Destination Location",
        type: "GoogleAutoComplete",
        required: true,
      },
      {
        name: "startDateAndTime",
        label: "Start Date And Time",
        placeholder: "Start Date",
        type: "selectDate&Time",
        required: false,
      },
      {
        name: "targetedDateAndTime",
        label: "Targeted Date & Time",
        placeholder: "targeted Date & Time",
        type: "selectDate&Time",
        required: false,
      },
      {
        name: "weight",
        label: "Weight",
        placeholder: "Weight",
        type: "text",
        required: false,
      },
      {
        name: "status",
        label: "Status",
        placeholder: "Status",
        type: "SingleSelect",
        required: false,
        options: [
          { label: "Pending", value: "1" },
          { label: "On Going", value: "2" },
        ],
      },
      {
        name: "distanceOfTrip",
        label: "Distance Of Trip",
        placeholder: "Distance Of Trip",
        type: "text",
        required: false,
      },

    ],
    TRIP_STATUS: [
      {
        name: "status",
        label: "Status",
        placeholder: "Status",
        type: "SingleSelect",
        required: false,
        options: [
          { label: "Pending", value: "1" },
          { label: "On Going", value: "2" },
          { label: "Completed", value: "3" },
        ],
      },
      {
        name: "completedDateAndTime",
        label: "Completed Date & Time",
        placeholder: "Completed Date & Time",
        type: "selectDate&Time",
        required: false,
      },
      {
        name: "fuelUserd",
        label: "Fuel Used",
        placeholder: "Fuel Used",
        type: "text",
        required: false,
      },
    ]
  },


};

const STATIC_DATA = {
  admin: [
    {
      no: 1,
      email: "abrandsma0@t.co",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 2,
      email: "jborge1@alexa.com",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 3,
      email: "smcharg2@constantcontact.com",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 4,
      email: "eleyzell3@angelfire.com",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 5,
      email: "epanswick4@ocn.ne.jp",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
  ],
  client: [
    {
      no: 1,
      clientId: "epanswick4@ocn.ne.jp",
      name: "Nishita Batta",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 2,
      clientId: "eleyzell3@angelfire.com",
      name: "Pravin Maharaj",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 3,
      clientId: "smcharg2@constantcontact.com",
      name: "Binoya Deo",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 4,
      clientId: "abrandsma0@t.co",
      name: "Heer Bhagat",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 5,
      clientId: "jahudjh@angelfire.com",
      name: "Kirti Jain",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
  ],
  driver: [
    {
      no: 1,
      name: "Karmen",
      drivingLicense: "C6-28-70-3F-10-67",
      mobileNumber: "911-525-9784",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 2,
      name: "Barrie",
      drivingLicense: "34-FE-4E-57-DC-0D",
      mobileNumber: "820-771-3792",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 3,
      name: "Lottie",
      drivingLicense: "21-A2-6F-E1-3E-67",
      mobileNumber: "592-272-9633",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 4,
      name: "Lenard",
      drivingLicense: "C1-98-D1-3E-8B-0B",
      mobileNumber: "436-857-1373",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 5,
      name: "Katlin",
      drivingLicense: "57-B7-B3-4F-89-A0",
      mobileNumber: "410-675-8521",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
  ],
  vehicles: [
    {
      no: "1",
      vehicleRegistrationNumber: "Electrical",
      vehicleType: "1B-64-76-28-3E-8A",
      transporterName: "BR-RJ",
      totalCapacity: "23",
      totalKmscovered: "2000",
      vehicleEngineType: "FR-K",
      allocate: "Allocated",
      vehicleTank: "petrol",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: "2",
      vehicleRegistrationNumber: "Fire Protection",
      vehicleType: "63-67-54-AF-41-20",
      transporterName: "BR-SP",
      totalCapacity: "2024",
      totalKmscovered: "1994",
      vehicleEngineType: "SO-GE",
      allocate: "Allocated",
      vehicleTank: "Diesel",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: "3",
      vehicleRegistrationNumber: "Drilled Shafts",
      vehicleType: "00-7D-26-65-D9-30",
      transporterName: "BR-MG",
      totalCapacity: "2818",
      totalKmscovered: "1994",
      vehicleEngineType: "CH-NW",
      allocate: "Not Allocated",
      vehicleTank: "CNG",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: "4",
      vehicleRegistrationNumber: "Overhead Doors",
      vehicleType: "87-F6-71-4E-A0-3D",
      transporterName: "BF-HOU",
      totalCapacity: "1511",
      totalKmscovered: "2004",
      vehicleEngineType: "NL-FR",
      allocate: "Not Allocated",
      vehicleTank: "Petrol",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: "5",
      vehicleRegistrationNumber: "Ornamental Railings",
      vehicleType: "64-F1-95-37-DE-55",
      transporterName: "US-AR",
      totalCapacity: "262",
      totalKmscovered: "2004",
      vehicleEngineType: "CA-ON",
      allocate: "Allocated",
      vehicleTank: "Diesel",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
  ],
  transporter: [
    {
      no: 1,
      transporterName: "Chevrolet",
      gstNumber: "DO15 WCCX 6247 0439 9990 3502 2676",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 2,
      transporterName: "Buick",
      gstNumber: "FR68 9585 0976 14HW YXKD JCAM V71",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 3,
      transporterName: "Toyota",
      gstNumber: "DO31 HYH8 6344 6275 7095 7970 3268",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 4,
      transporterName: "Plymouth",
      gstNumber: "MT84 CVGU 6877 6UJL VTKP SHCL ENPW WKA",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 5,
      transporterName: "Mercury",
      gstNumber: "IL60 8234 5377 6834 4348 099",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
  ],
  plant: [
    {
      no: 1,
      unitName: "Hartsville",
      location: "Paroaria gularis",
      gstNumber: "NO21 6959 5244 315",
      client: "Catina",
      action: (
        <div>
          <EditButton />
          <DeleteButton />
        </div>
      ),
    },
    {
      no: 2,
      unitName: "Fresno",
      location: "Neotoma sp.",
      gstNumber: "FR55 4128 7398 57LI MUYB AZ8R Q20",
      client: "Nobie",
      action: (
        <div>
          <EditButton />
          <DeleteButton />
        </div>
      ),
    },
    {
      no: 3,
      unitName: "Rosh Pina",
      location: "Anthropoides paradisea",
      gstNumber: "IT37 Y637 3887 725N 1CIL GZVN GS9",
      client: "Caldwell",
      action: (
        <div>
          <EditButton />
          <DeleteButton />
        </div>
      ),
    },
    {
      no: 4,
      unitName: "Fort Richardson",
      location: "Felis libyca",
      gstNumber: "LI57 4299 0BME OJEA EPNH S",
      client: "Sarita",
      action: (
        <div>
          <EditButton />
          <DeleteButton />
        </div>
      ),
    },
    {
      no: 5,
      unitName: "Anchorage",
      location: "Grus canadensis",
      gstNumber: "FI24 6732 6004 7966 36",
      client: "Glennie",
      action: (
        <div>
          <EditButton />
          <DeleteButton />
        </div>
      ),
    },
  ],
  trips: [
    {
      no: 1,
      startTime: "5:45 PM",
      source: "Baboon, olive",
      destination: "Currillo",
      driverName: "Percival",
      driverPhoneNumber: "436-945-8512",
      vehicleNumber: "565698",
      loadVehicleCarrying: "XS",
      targettedDate_Time: "5/1/2022",
      status: true,
      totalCarbonEmit: 14,
      Co2efficiency: 33,
      clientName: "Kirti Jain",
      transporterName: "Chevrolet",
      plantName: "Anchorage",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 2,
      startTime: "5:27 PM",
      source: "Goat, mountain",
      destination: "Gulfport",
      driverName: "Caitrin",
      driverPhoneNumber: "944-884-7758",
      vehicleNumber: "455689",
      loadVehicleCarrying: "XS",
      targettedDate_Time: "10/21/2022",
      status: true,
      totalCarbonEmit: 27,
      Co2efficiency: 1,
      clientName: "Heer Bhagat",
      transporterName: "Buick",
      plantName: "Fort Richardson",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 3,
      startTime: "11:25 AM",
      source: "Asian openbill",
      destination: "Reims/Champagne",
      driverName: "Ave",
      driverPhoneNumber: "177-112-9254",
      vehicleNumber: "659832",
      loadVehicleCarrying: "XL",
      targettedDate_Time: "7/3/2022",
      status: false,
      totalCarbonEmit: 88,
      Co2efficiency: 92,
      clientName: "Binoya Deo",
      transporterName: "Toyota",
      plantName: "Rosh Pina",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 4,
      startTime: "2:04 AM",
      source: "Giraffe",
      destination: null,
      driverName: "Amaleta",
      driverPhoneNumber: "133-951-1265",
      vehicleNumber: "659845",
      loadVehicleCarrying: "XL",
      targettedDate_Time: "12/6/2022",
      status: true,
      totalCarbonEmit: 59,
      Co2efficiency: 51,
      clientName: "Pravin Maharaj",
      transporterName: "Plymouth",
      plantName: "Fresno",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ),
    },
    {
      no: 5,
      startTime: "7:06 PM",
      source: "Pademelon, red-legged",
      destination: "Beledweyne",
      driverName: "Bobby",
      driverPhoneNumber: "697-566-5157",
      vehicleNumber: "789545",
      loadVehicleCarrying: "L",
      targettedDate_Time: "12/13/2022",
      status: false,
      totalCarbonEmit: 18,
      Co2efficiency: 73,
      clientName: "Nishita Batta",
      transporterName: "Mercury",
      plantName: "Hartsville",
      action: (
        <>
          <EditButton />
          <DeleteButton />
        </>
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
