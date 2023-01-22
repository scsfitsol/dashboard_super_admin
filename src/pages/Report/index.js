import React from "react";
import { Row, Col, CardBody, Card, Progress, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import LineChart from "./line-chart";
import RevenueChart from "./revenue-chart";
import SalesAnalytics from "./sales-analytics";
import ScatterChart from "./scatter-analytics";
import LatestTransaction from "./latest-transaction";

//Import Image
import widgetImage from "../../assets/images/widget-img.png";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Revenue from "./Revenue";
import Inbox from "./Inbox";
import RadialChart from "../old/AllCharts/apex/RadialChart";
import SplineArea from "../old/AllCharts/apex/SplineArea";

const Report = () => {
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
                <CardTitle className="h4 mb-4">
                  {" "}
                  Carbon Emissions & Efficiency{" "}
                </CardTitle>
                <SplineArea />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="bx bxs-truck"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Vehical</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-3">
                    <h4 className="mt-4 ">300</h4>
                    <p className="mb-0">
                      <span className="text-success me-2">Free</span>
                    </p>
                  </div>
                  <div className="col-5 align-self-center">
                    <h4 className="mt-4 text-warning">100</h4>
                    <p className="mb-0">
                      <span className="text-warning me-2">Allocate</span>
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg={4}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-account-multiple-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Clients</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-3">
                    <h4 className="mt-4 ">300</h4>
                    <p className="mb-0">
                      <span className=" me-2">Clients</span>
                    </p>
                  </div>
                  <div className="col-5 align-self-center">
                    <h4 className="mt-4 text-success">10</h4>
                    <p className="mb-0">
                      <span className="text-success me-2">New Client</span>
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="bx bxs-factory"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Plants</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-3">
                    <h4 className="mt-4 ">1200</h4>
                    <p className="mb-0">
                      <span className=" me-2">Plants</span>
                    </p>
                  </div>
                  <div className="col-5 align-self-center">
                    <h4 className="mt-4 text-success">10</h4>
                    <p className="mb-0">
                      <span className="text-success me-2">New plants</span>
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Overview />

          <Col lg={6}>
            <Card>
              <CardBody>
                <CardTitle className="h4 mb-4">Trip</CardTitle>
                <RadialChart />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Report;
