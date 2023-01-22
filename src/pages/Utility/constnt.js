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
          className: "waves-effect",
          to: "/vehicles",
          lable: "Vehicles",
          icon: "bx bxs-truck",
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
        field: "name",
        sort: "asc",
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
        field: "name",
        sort: "asc",
      },
      {
        label: "Driving license",
        field: "drivingLicense",
        sort: "asc",
      },
      {
        label: "Mobile Number",
        field: "mobileNumber",
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
        field: "vehicleRegistrationNumber",
        sort: "asc",
      },
      {
        label: "Type",
        field: "vehicleType",
        sort: "asc",
      },
      {
        label: "Fuel Tank",
        field: "vehicleTank",
        sort: "asc",
      },
      {
        label: "Transporter Name",
        field: "transporterName",
        sort: "asc",
      },
      {
        label: "Capacity",
        field: "totalCapacity",
        sort: "asc",
      },
      {
        label: "Total KMS Covered",
        field: "totalKmscovered",
        sort: "asc",
      },
      {
        label: "Engine Type",
        field: "vehicleEngineType",
        sort: "asc",
      },
      {
        label: "Allocate",
        field: "allocate",
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
        field: "transporterName",
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
        field: "client",
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
        field: "gstNumber",
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
        label: "Start Time",
        field: "startTime",
        sort: "asc",
      },
      {
        label: "Source",
        field: "source",
        sort: "asc",
      },
      {
        label: "Destination",
        field: "destination",
        sort: "asc",
      },
      {
        label: "Driver Name",
        field: "driverName",
        sort: "asc",
      },
      {
        label: "Driver Phone Number",
        field: "driverPhoneNumber",
        sort: "asc",
      },
      {
        label: "Vehicle Number",
        field: "vehicleNumber",
        sort: "asc",
      },
      {
        label: "Load vehicle carrying",
        field: "loadVehicleCarrying",
        sort: "asc",
      },
      {
        label: "Targetted Date & Time",
        field: "targettedDate_Time",
        sort: "asc",
      },
      {
        label: "Status",
        field: "status",
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

  FORM_FIELDS: {
    DRIVER: [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
      },
      {
        name: "drivingLicenseNumber",
        label: "Driving License Number",
        placeholder: "Driving License Number",
        type: "text",
      },
      {
        name: "mobileNumber",
        label: "Mobile Number",
        placeholder: "Mobile Number",
        type: "text",
      },
    ],
    CLIENT: [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
      },
      {
        name: "clientId",
        label: "Client ID",
        placeholder: "Client ID",
        type: "text",
      },
    ],
    PLANT: [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
      },
      {
        name: "clientName",
        label: "Client Name",
        placeholder: "Name Name",
        type: "SingleSelect",
        options: [
          { label: "Kirti Jain", value: "Kirti Jain" },
          { label: "Heer Bhagat", value: "Heer Bhagat" },
          { label: "Binoya Deo", value: "Binoya Deo" },
          { label: "Pravin Maharaj", value: "Pravin Maharaj" },
          { label: "Nishita Batta", value: "Nishita Batta" },
        ],
      },
      {
        name: "unitName",
        label: "Unit Name",
        placeholder: "Unit Name",
        type: "text",
      },
      {
        name: "location",
        label: "Location",
        placeholder: "Location",
        type: "text",
      },
      {
        name: "gstNumber",
        label: "GST Number",
        placeholder: "GST Number",
        type: "text",
      },
    ],
    ADMIN: [
      {
        name: "emailId",
        label: "Email ID",
        placeholder: "Email ID",
        type: "text",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "text",
      },
    ],
    TRANSPORTER: [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
      },
      {
        name: "gstNumber",
        label: "GST Number",
        placeholder: "GST Number",
        type: "text",
      },
    ],
    VEHICLES: [
      {
        name: "registrationNumber",
        label: "registrationNumber",
        placeholder: "registrationNumber",
        type: "text",
      },
      {
        name: "type",
        label: "Type",
        placeholder: "Type",
        type: "text",
      },
      {
        name: "fuelTank",
        label: "Fuel Tank",
        placeholder: "Fuel Tank",
        type: "SingleSelect",
        options: [
          { label: "Petrol", value: "petrol" },
          { label: "diesel", value: "Diesel" },
          { label: "CNG", value: "CNG" },
          { label: "PLG", value: "PLG" },
        ],
      },
    ],
  },
};

const STATIC_DATA = {
  admin: [
    {
      no: 1,
      email: "abrandsma0@t.co",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 2,
      email: "jborge1@alexa.com",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 3,
      email: "smcharg2@constantcontact.com",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 4,
      email: "eleyzell3@angelfire.com",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 5,
      email: "epanswick4@ocn.ne.jp",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 2,
      clientId: "eleyzell3@angelfire.com",
      name: "Pravin Maharaj",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 3,
      clientId: "smcharg2@constantcontact.com",
      name: "Binoya Deo",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 4,
      clientId: "abrandsma0@t.co",
      name: "Heer Bhagat",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 5,
      clientId: "jahudjh@angelfire.com",
      name: "Kirti Jain",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 2,
      transporterName: "Buick",
      gstNumber: "FR68 9585 0976 14HW YXKD JCAM V71",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 3,
      transporterName: "Toyota",
      gstNumber: "DO31 HYH8 6344 6275 7095 7970 3268",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 4,
      transporterName: "Plymouth",
      gstNumber: "MT84 CVGU 6877 6UJL VTKP SHCL ENPW WKA",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 5,
      transporterName: "Mercury",
      gstNumber: "IL60 8234 5377 6834 4348 099",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 2,
      unitName: "Fresno",
      location: "Neotoma sp.",
      gstNumber: "FR55 4128 7398 57LI MUYB AZ8R Q20",
      client: "Nobie",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 3,
      unitName: "Rosh Pina",
      location: "Anthropoides paradisea",
      gstNumber: "IT37 Y637 3887 725N 1CIL GZVN GS9",
      client: "Caldwell",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 4,
      unitName: "Fort Richardson",
      location: "Felis libyca",
      gstNumber: "LI57 4299 0BME OJEA EPNH S",
      client: "Sarita",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      no: 5,
      unitName: "Anchorage",
      location: "Grus canadensis",
      gstNumber: "FI24 6732 6004 7966 36",
      client: "Glennie",
      action: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
        </>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light me-3"
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="btn btn-danger waves-effect waves-light"
          >
            Delete
          </Button>
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
