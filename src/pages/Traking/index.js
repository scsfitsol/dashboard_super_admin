import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import avatar1 from "../../assets/images/users/avatar-3.jpg";
import avatar2 from "../../assets/images/users/avatar-4.jpg";
import avatar3 from "../../assets/images/users/avatar-5.jpg";
import avatar4 from "../../assets/images/users/avatar-6.jpg";

const LoadingContainer = () => <div>Loading...</div>;

const inbox = [
  {
    id: 1,
    img: avatar1,
    name: "Paul",
    desc: "+91 99781 22823",
    time: "90%",
    Vehical: "GJ-01-NP-2025",
    fuel: "Diesel",
  },
  {
    id: 2,
    img: avatar2,
    name: "Mary",
    desc: "+91 81601 55585",
    time: "80%",
    Vehical: "MP-05-NP-1011",
    fuel: "Diesel",
  },
  {
    id: 3,
    img: avatar3,
    name: "Cynthia",
    desc: "+91 96870 59947",
    time: "50%",
    Vehical: "CZ-02-AJ-1860",
    fuel: "Diesel",
  },
  {
    id: 4,
    img: avatar4,
    name: "Darren",
    desc: "+91 99781 22823",
    time: "100%",
    Vehical: "DL-02-ER-8894",
    fuel: "Diesel",
  },
];

const Traking = (props) => {
  const selectedPlace = {};

  function onMarkerClick() {
    alert("You clicked in this marker");
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Tracking</h4>

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
          <h4 className="page-title mb-3 font-size-18">Ongoing Trip</h4>

          <div
            style={{
              display: "flex",
              overflow: "hidden",
              overflowX: "scroll",
              gap: "20px",
              userSelect: "none",
            }}
            className="mb-3"
          >
            {inbox.map((Item) => (
              <Col lg={4} key={Item.id}>
                <Card>
                  <CardBody>
                    <CardTitle className="font-size-12 ">
                      TripID: #1215sdvsd
                    </CardTitle>

                    <div className="mt-3 d-flex">
                      <strong className="ftext-truncate bold">{"Time"}</strong>{" "}
                      &nbsp;
                    </div>
                    <div className=" d-flex">
                      <p
                        className="ftext-truncate "
                        style={{ padding: "0", margin: "0" }}
                      >
                        {"Start Date"}
                      </p>{" "}
                      &nbsp;
                      <p
                        style={{ padding: "0", margin: "0" }}
                        className="text-truncate ml-2"
                      >
                        {"1/10/2022"}
                      </p>
                    </div>
                    <div className="d-flex">
                      <p className="ftext-truncate ">{"End Date"}</p> &nbsp;
                      <p className="text-truncate ml-2">{"1/10/2022"}</p>
                    </div>
                    <div className="d-flex">
                      <strong className="ftext-truncate bold">
                        {"Driver"}
                      </strong>{" "}
                      &nbsp;
                    </div>

                    <div className="d-flex align-items-start">
                      <div className="me-3 align-self-center">
                        <img
                          src={Item.img}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h5 className="font-size-16 mb-1">{Item.name}</h5>
                        <p className="text-truncate mb-0">{Item.desc}</p>
                      </div>
                    </div>

                    <div className="mt-3 d-flex">
                      <strong className="ftext-truncate bold">
                        {"Vehical"}
                      </strong>{" "}
                      &nbsp;
                    </div>

                    <div className="d-flex align-items-start">
                      <div className="flex-1 overflow-hidden">
                        <p className="mb-1">{Item.Vehical}</p>
                        <p className="text-truncate mb-0">{Item.fuel}</p>
                      </div>
                      <div className="font-size-12 ms-auto">{Item.time}</div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </div>
        </Row>

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle>Vehical Traking</CardTitle>

                <div
                  id="gmaps-markers"
                  className="gmaps "
                  style={{ position: "relative", height: "400px" }}
                >
                  <Map
                    google={props.google}
                    style={{ width: "100%", height: "100%" }}
                    zoom={14}
                  >
                    <Marker
                      title={"The marker`s title will appear as a tooltip."}
                      name={"SOMA"}
                      position={{ lat: 37.778519, lng: -122.40564 }}
                    />
                    <Marker name={"Dolores park"} />
                    <InfoWindow>
                      <div>
                        <h1>{selectedPlace.name}</h1>
                        <Button
                          color="primary"
                          className="btn btn-primary waves-effect waves-light mb-3"
                        >
                          Add Admin
                        </Button>
                      </div>
                    </InfoWindow>
                  </Map>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

Traking.propTypes = {
  google: PropTypes.object,
};

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(Traking)
);
