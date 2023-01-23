import React, { useRef, useState } from "react";
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
  Modal,
  Progress,
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
  const [modal_standard, setmodal_standard] = useState(false);
  const [modalData, setModalData] = useState({});

  function onMarkerClick() {
    alert("You clicked in this marker");
  }

  function openModel(Item) {
    setmodal_standard(!modal_standard);
    console.log(Item);
  }

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const horizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Traking</h4>

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
          <div className="d-flex justify-content-between align-items-center mt-5 mt-md-0">
            <h4 className="page-title mb-3 font-size-18">Ongoing Trip</h4>
            <div>
              <i
                className="bx bx-left-arrow-circle"
                onClick={() =>
                  horizantalScroll(elementRef.current, 25, 400, -20)
                }
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              ></i>
              <i
                className="bx bx-right-arrow-circle"
                onClick={() =>
                  horizantalScroll(elementRef.current, 25, 400, 20)
                }
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              overflow: "hidden",
              // overflowX: "scroll",
              gap: "20px",
              userSelect: "none",
            }}
            className="mb-3"
            ref={elementRef}
          >
            {inbox.map((Item) => (
              <Col lg={4} key={Item.id}>
                <Card>
                  <CardBody>
                    <CardTitle className="font-size-12 d-flex justify-content-between align-items-center">
                      <div>TripID: #1215sdvsd</div>
                      <div
                        className="m-0 cursor-pointer"
                        onClick={() => {
                          setModalData(Item);
                          openModel(Item);
                        }}
                        style={{
                          cursor: "pointer",
                          fontSize: "25px",
                        }}
                      >
                        <i className="bx bx-info-circle"></i>
                      </div>
                    </CardTitle>

                    {/*  */}

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
                <CardTitle>Vehical Tracking</CardTitle>

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
                          Create Admin
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
      <Modal
        isOpen={modal_standard}
        toggle={() => {
          openModel();
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myModalLabel">
            Trip Details
          </h5>
          <button
            type="button"
            onClick={() => {
              setmodal_standard(false);
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Card>
          <CardBody>
            <div className="modal-body">
              <CardTitle className="font-size-12">TripID: #1215sdvsd</CardTitle>
              <div className="mt-3 d-flex">
                <strong className="ftext-truncate bold">{"Vehical"}</strong>{" "}
                &nbsp;
              </div>

              <div className="d-flex align-items-start">
                <div className="flex-1 overflow-hidden">
                  <p className="mb-1">{modalData?.Vehical}</p>
                  <p className="text-truncate mb-0">{modalData?.fuel}</p>
                </div>
                <div className="font-size-12 ms-auto">{modalData?.time}</div>
              </div>

              <div className="d-flex mt-3">
                <strong className="ftext-truncate bold">{"Driver"}</strong>{" "}
                &nbsp;
              </div>
              <div className="d-flex align-items-start">
                <div className="me-3 align-self-center">
                  <img
                    src={modalData?.img}
                    alt=""
                    className="avatar-sm rounded-circle"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h5 className="font-size-16 mb-1">{modalData?.name}</h5>
                  <p className="text-truncate mb-0">{modalData?.desc}</p>
                </div>
              </div>

              <div className="mt-3 d-flex">
                <strong className="ftext-truncate bold">{"Time"}</strong> &nbsp;
              </div>
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <div className=" d-flex flex-column justify-content-center">
                  <p className="ftext-truncate mb-0">{"Start Date"}</p>
                  <p className="text-truncate ml-2">{"1/10/2022"}</p>
                </div>
                <div className="mb-4 w-50">
                  <Progress color="primary" value={100} />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <p className="ftext-truncate mb-0">{"End Date"}</p>
                  <p className="text-truncate ml-2">{"1/10/2022"}</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Modal>
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
