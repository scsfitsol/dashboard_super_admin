import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, CardTitle } from "reactstrap";

//Import Image
import Overview from "./Overview";
import RadialChart from "../old/AllCharts/apex/RadialChart";
import CONSTANT, { ToolTipButton } from "../Utility/constnt";
import useHttp from "../../components/Hook/Use-http";
import HomeChart1 from "../../components/Custome/Charts/HomeChart1";
import DonutChart from "../old/AllCharts/apex/dountchart";
import PieChart from "../old/AllCharts/apex/PieChart";
// import ColumnChartToast from "../old/AllCharts/toastui/ColumnChartToast";

const CardData = [
  {
    icon: "bx bxs-truck",
    name: "Transporters",
    count: 80,
    API_Path1: 'transporter',
    API_Path2: 'last30DaysTransporter'
  },
  {
    icon: "mdi mdi-account-multiple-outline",
    name: "Clients",
    count: 120,
    API_Path1: 'last30DaysClient',
    API_Path2: null
  },
  {
    icon: "bx bxs-factory",
    name: "Sites",
    count: 60,
    API_Path1: 'plant',
    API_Path2: 'last30DaysPlant'
  },
];

const Report = () => {
  const [analysisData, setAnalysisData] = useState({});
  const API_CALL = useHttp();
  const Transport = [
    {
      per: 80,
      name: "Sarine",
      trip: 200,
    },
    {
      per: 100,
      name: "Lefty",
      trip: 120,
    },
    {
      per: 50,
      name: "Devondra",
      trip: 40,
    },
    {
      per: 30,
      name: "Luisa",
      trip: 210,
    },
    {
      per: 90,
      name: "Chloe",
      trip: 30,
    },
  ];
  const Carbon = [
    {
      per: 50,
      name: "January",
      trip: 120,
    },
    {
      per: 90,
      name: "February",
      trip: 180,
    },
    {
      per: 70,
      name: "March",
      trip: 900,
    },
    {
      per: 10,
      name: "April",
      trip: 200,
    },
    {
      per: 100,
      name: "May",
      trip: 100,
    },
    {
      per: 50,
      name: "June",
      trip: 120,
    },
    {
      per: 90,
      name: "July",
      trip: 180,
    },
    {
      per: 70,
      name: "August",
      trip: 900,
    },
    {
      per: 10,
      name: "September",
      trip: 200,
    },
    {
      per: 100,
      name: "October",
      trip: 100,
    },
    {
      per: 10,
      name: "November",
      trip: 200,
    },
    {
      per: 100,
      name: "December",
      trip: 100,
    },
  ];
  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAnalysis, analysisDataHandler);
    })();
  }, []);

  const analysisDataHandler = (res) => {
    setAnalysisData(res?.data);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Report</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">
                    Welcome to Fitsol Dashboard
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Row>

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="h4">
                  {" "}
                  Carbon Emissions & Efficiency{" "}
                </CardTitle>
                <HomeChart1 />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          {CardData.map((data, index) => {
            return (
              <Col key={index} sm={4}>
                <Card>
                  <CardBody>
                    <div className="d-flex align-items-start">
                      <div className="avatar-sm font-size-20 me-3">
                        <span className="avatar-title bg-soft-primary text-primary rounded">
                          <i className={data.icon}></i>
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-size-16 mt-2">{data?.name}</div>
                      </div>
                    </div>

                    <div className="d-flex">
                      <div className="">
                        {
                          data?.API_Path2 !== null
                            ? <h4 className="mt-4 ">{analysisData?.[data?.API_Path1]?.[data?.API_Path2]}</h4>
                            : <h4 className="mt-4 ">{analysisData?.[data?.API_Path1]}</h4>
                        }
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Row className="w-100">
          <Col lg={6}>
            <Card style={{ height: "450px" }}>
              <CardBody>
                <div className="mb-4 d-flex align-items-center justify-content-between">
                  <CardTitle className="fs-4">Vehicles</CardTitle>
                  <ToolTipButton
                    id="Vehicle"
                    msg="Showcase the total number of allocated and free vehicles"
                  />
                </div>
                <PieChart data={Object.keys(analysisData).length > 0 && [+analysisData?.vehicle?.allocatedVehicle, +analysisData?.vehicle?.freeVehicle]} />
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card style={{ height: "450px" }}>
              <CardBody>
                <div className="mb-4 d-flex align-items-center justify-content-between">
                  <CardTitle className="fs-4">Trips</CardTitle>
                  <ToolTipButton
                    id="Trip"
                    msg="Overall different status of the total number of trips"
                  />
                </div>
                <RadialChart
                  data={Object.keys(analysisData).length > 0 && [+analysisData?.trip?.totalLateTrip, +analysisData?.trip?.totalOnTimeTrip, +analysisData?.trip?.totalEarlyTrip]}
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card style={{ height: "500px" }}>
              <CardBody>
                <div className="mb-4 d-flex align-items-center justify-content-between">
                  <CardTitle className="fs-4">
                    Transporters Information
                  </CardTitle>
                  <ToolTipButton
                    id="Transport"
                    msg="Showcase the transporter’s efficiency on the number of trips covered, fuel consumed, etc."
                  />
                </div>
                <Overview data={Transport} isPercentage={true} />
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card style={{ height: "500px" }}>
              <CardBody>
                <div className="mb-4 d-flex align-items-center justify-content-between">
                  <CardTitle className="fs-4">Carbon Emission</CardTitle>
                  <ToolTipButton
                    id="Carbon"
                    msg="Carbon emitted to date on a total number of trips completed by different clients."
                  />
                </div>
                <Overview data={Carbon} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Report;
