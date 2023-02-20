import React, { useEffect, useRef, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Modal,
} from "reactstrap";
import "./tracking.css";
import truckSvg from "../../assets/images/card/truck.svg";
import topArrow from "../../assets/images/card/arrowTop.svg";
import downArrow from "../../assets/images/card/arrowDown.svg";
import TrackingSvg from "./SVG/TrackingSvg";
import TrackIdSvg from "./SVG/TrackIdSvg";
import CalanderIconSvg from "./SVG/CalanderIconSvg";
import LocationIconSvg from "./SVG/LocationIconSvg";
import CONSTANT from "../Utility/constnt";
import useHttp from "../../components/Hook/Use-http";
import moment from "moment/moment";
import defaultImage from "../../assets/images/UserImage.jpg";
import TrackMap from "./TrackMap";

const Tracking = () => {
  const [modal_standard, setModal_standard] = useState(false);
  const [modalData, setModalData] = useState({});
  const [selectCard, setSelectCard] = useState(null);
  const [selectTripData, setSelectTripData] = useState({})
  const [vehicleData, setVehicleData] = useState([]);
  const [arrowDisable, setArrowDisable] = useState(true);
  const elementRef = useRef(null);
  const API_CALL = useHttp();

  function openModel(Item) {
    setModal_standard(!modal_standard);
  }

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAllTrip, tripDataHandler);
    })();
  }, []);

  const tripDataHandler = (res) => {
    setVehicleData(res?.data);
  };

  const horizontalScroll = (element, speed, distance, step) => {
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

  const onClickSelectCard = (Item, index) => {
    setSelectTripData(Item)
    setSelectCard(index);
  };

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
          <div className="d-flex justify-content-between align-items-center mt-5 mt-md-0">
            <h4 className="page-title mb-3 font-size-18">Ongoing Trip</h4>

            {vehicleData.length > 0 ? (
              <div>
                <i
                  className="bx bx-left-arrow-circle"
                  onClick={() =>
                    horizontalScroll(elementRef.current, 25, 400, -20)
                  }
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                ></i>
                <i
                  className="bx bx-right-arrow-circle"
                  onClick={() =>
                    horizontalScroll(elementRef.current, 25, 400, 20)
                  }
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                ></i>
              </div>
            ) : null}
          </div>
        </Row>

        {vehicleData.length > 0 ? (
          <>
            <Row>
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
                {vehicleData.map((Item, index) => (
                  <Col lg={3} key={Item.id}>
                    <Card
                      className={
                        selectCard === index
                          ? "selectCard vehicleCard"
                          : "vehicleCard"
                      }
                      onClick={() => onClickSelectCard(Item, index)}
                    >
                      <CardBody>
                        <CardTitle className="font-size-12 m-0">
                          <div className=" d-flex justify-content-between align-items-center">
                            <div className="trackId d-flex">
                              <svg
                                width="21"
                                height="21"
                                viewBox="0 0 13 13"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8.04048 10.8333H3.52081C2.77385 10.8333 2.16665 10.2261 2.16665 9.47918C2.16665 8.73222 2.77385 8.12501 3.52081 8.12501H7.31248C8.3579 8.12501 9.20831 7.27459 9.20831 6.22918C9.20831 5.18376 8.3579 4.33334 7.31248 4.33334H4.67944C4.48051 4.72328 4.23417 5.08715 3.94602 5.41668H7.31248C7.76044 5.41668 8.12498 5.78122 8.12498 6.22918C8.12498 6.67713 7.76044 7.04168 7.31248 7.04168H3.52081C2.17694 7.04168 1.08331 8.1353 1.08331 9.47918C1.08331 10.8231 2.17694 11.9167 3.52081 11.9167H8.71702C8.45123 11.5823 8.22426 11.2189 8.04048 10.8333ZM2.70831 1.08334C1.8124 1.08334 1.08331 1.81243 1.08331 2.70834C1.08331 4.43518 2.70831 5.41668 2.70831 5.41668C2.70831 5.41668 4.33331 4.43463 4.33331 2.70834C4.33331 1.81243 3.60423 1.08334 2.70831 1.08334ZM2.70831 3.52084C2.60158 3.52081 2.4959 3.49975 2.3973 3.45887C2.2987 3.41799 2.20912 3.35809 2.13368 3.2826C2.05823 3.2071 1.99839 3.11748 1.95758 3.01886C1.91677 2.92023 1.89578 2.81454 1.89581 2.7078C1.89585 2.60107 1.91691 2.49538 1.95779 2.39679C1.99866 2.29819 2.05856 2.20861 2.13406 2.13317C2.20956 2.05772 2.29918 1.99788 2.3978 1.95707C2.49642 1.91625 2.60212 1.89527 2.70885 1.8953C2.92441 1.89537 3.13112 1.98107 3.28349 2.13355C3.43586 2.28602 3.52143 2.49278 3.52135 2.70834C3.52128 2.9239 3.43558 3.13061 3.28311 3.28298C3.13063 3.43535 2.92387 3.52092 2.70831 3.52084Z" />
                                <path d="M10.2917 7.58334C9.39577 7.58334 8.66669 8.31243 8.66669 9.20834C8.66669 10.9352 10.2917 11.9167 10.2917 11.9167C10.2917 11.9167 11.9167 10.9346 11.9167 9.20834C11.9167 8.31243 11.1876 7.58334 10.2917 7.58334ZM10.2917 10.0208C10.185 10.0208 10.0793 9.99975 9.98067 9.95887C9.88208 9.91799 9.7925 9.85809 9.71705 9.7826C9.6416 9.7071 9.58176 9.61748 9.54095 9.51886C9.50014 9.42023 9.47915 9.31454 9.47919 9.2078C9.47922 9.10107 9.50028 8.99539 9.54116 8.89679C9.58204 8.79819 9.64194 8.70861 9.71743 8.63317C9.79293 8.55772 9.88255 8.49788 9.98117 8.45707C10.0798 8.41625 10.1855 8.39527 10.2922 8.3953C10.5078 8.39537 10.7145 8.48107 10.8669 8.63355C11.0192 8.78602 11.1048 8.99278 11.1047 9.20834C11.1047 9.4239 11.019 9.63061 10.8665 9.78298C10.714 9.93535 10.5072 10.0209 10.2917 10.0208Z" />
                              </svg>
                              <p className="m-0 ms-1 fs-5">{Item.id}</p>
                            </div>
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
                          </div>
                        </CardTitle>
                        {Item?.vehicle?.allocate ? (
                          <div className="card_Header_arrow d-flex align-items-center">
                            <img src={topArrow} />
                            <p className="m-0">On Time</p>
                          </div>
                        ) : (
                          <div className="card_Header_arrow_false d-flex align-items-center">
                            <img src={downArrow} />
                            <p className="m-0">Running Late</p>
                          </div>
                        )}

                        <div className="d-flex align-items-start vehicleCard_Text mt-5">
                          <div className="flex-1 overflow-hidden">
                            <div className="d-flex align-items-center fw-bold">
                              <TrackingSvg />
                              <p className="m-0 ms-2 fs-5">{Item.time}</p>
                            </div>
                            <div className="d-flex mt-2">
                              <p className="mb-1 fs-5 fw-normal">
                                {Item?.vehicle?.registrationNumber} (
                                {Item?.vehicle?.fuelType})
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                      <div className="truckImage w-100">
                        <img src={truckSvg} />
                      </div>
                    </Card>
                  </Col>
                ))}
              </div>
            </Row>
            <TrackMap data={selectTripData} />
          </>
        ) : (
          <>
            {" "}
            <div className="alert alert-danger text-center" role="alert">
              No Any On Going Trips Found
            </div>
          </>
        )}
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
              setModal_standard(false);
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
              <CardTitle className="font-size-12">
                <div className="d-flex align-items-center">
                  <TrackIdSvg />
                  <div className="flex-1">
                    <div className="font-size-16 ms-2">{modalData.id}</div>
                  </div>
                </div>
              </CardTitle>

              <div className="mt-3 d-flex">
                <strong className="ftext-truncate font-size-18 text-dark bold">
                  {"Vehicle"}
                </strong>{" "}
                &nbsp;
              </div>

              <div
                className="d-flex flex-column"
                style={{
                  letterSpacing: "1px",
                }}
              >
                <div className="d-flex">
                  <p className="m-0">
                    {modalData?.vehicle?.registrationNumber}
                  </p>
                  <p className="text-truncate m-0">
                    {" "}
                    ({modalData?.vehicle?.fuelType}){" "}
                  </p>
                </div>
                <div className="font-size-15">{modalData?.time}</div>
              </div>
              <hr></hr>

              <div className="d-flex align-items-start">
                <div className="me-3 align-self-center">
                  <img
                    src={modalData?.img ? modalData?.img : defaultImage}
                    alt=""
                    className="avatar-sm rounded-circle"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h5 className="font-size-16 mb-1 text-dark">
                    {modalData?.driver?.name}
                  </h5>
                  <p className="text-truncate mb-0">
                    {" "}
                    {modalData?.driver?.mobile}
                  </p>
                </div>
              </div>
              <hr></hr>

              <div>
                <div className="d-flex row">
                  <div className="d-flex align-items-center modalCalender col-5">
                    <CalanderIconSvg />
                    <div className="ms-2">
                      <p className="m-0 font-size-10">
                        {moment(modalData?.startDateAndTime).format(
                          "DD-MM-YYYY"
                        )}
                      </p>
                      <p className="m-0">
                        {" "}
                        {moment(modalData?.startDateAndTime).format("LT")}
                      </p>
                    </div>
                  </div>
                  <div className="modalCalendertwo d-flex align-items-center col-7">
                    <div>
                      <LocationIconSvg />
                    </div>
                    <div>
                      <p className="text m-0 ms-2 font-size-10">
                        {modalData?.sourceLocation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row-">
                  <div className="col-5 d-flex justify-content-center">
                    <p className="calenderLine m-0"></p>
                  </div>
                </div>
                <div className="d-flex row">
                  <div className="d-flex align-items-center modalCalender col-5">
                    <CalanderIconSvg />
                    <div className="ms-2">
                      <p className="m-0 font-size-10">
                        {moment(modalData?.completedDateAndTime).format(
                          "DD-MM-YYYY"
                        )}
                      </p>
                      <p className="m-0">
                        {moment(modalData?.completedDateAndTime).format("LT")}
                      </p>
                    </div>
                  </div>
                  <div className="modalCalendertwo d-flex align-items-center col-7">
                    <div>
                      <LocationIconSvg />
                    </div>
                    <div>
                      <p className="text m-0 ms-2 font-size-10">
                        {modalData?.destinationLocation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Modal>
    </React.Fragment>
  );
};

export default Tracking


