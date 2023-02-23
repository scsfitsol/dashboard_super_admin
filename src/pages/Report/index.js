import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, CardTitle } from "reactstrap";

//Import Image
import Overview from "./Overview";
import RadialChart from "../old/AllCharts/apex/RadialChart";
import CONSTANT, { MonthName, ToolTipButton } from "../Utility/constnt";
import useHttp from "../../components/Hook/Use-http";
import HomeChart1 from "../../components/Custome/Charts/HomeChart1";
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
  const [transporterList, setTransporterList] = useState([]);
  const [tripList, setTripList] = useState([])
  const [carbonEmissionsData, setCarbonEmissionsData] = useState([])
  const API_CALL = useHttp();

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAnalysis, analysisDataHandler);
    })();
  }, []);

  const analysisDataHandler = (res) => {
    setAnalysisData(res?.data);
    setTransporterList(
      res?.data?.transporter?.transporterAnalytics.map((e) => {
        return {
          per: e?.utilisationAvg.toFixed(2),
          name: e?.name,
          trip: e?.count,
        }
      })
    );
    setTripList(
      res?.data?.trip?.clientAnalytics.map((e) => {
        return {
          per: e?.client?.carbonEmissionSum.toFixed(2), //Total Trip
          name: e?.client?.name,
          trip: e?.client?.count,
        }
      })
    )
    setCarbonEmissionsData(
      res?.data?.trip?.lastAllMonthsTripAnalytics.map((e) => {
        return ({
          key: MonthName[e.month - 1],
          value: e.carbonEmissionSum
        })
      })
    )
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
                <HomeChart1 data={carbonEmissionsData} />
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
                <Overview data={transporterList} isPercentage={true} />
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
                <Overview data={tripList} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Report;
