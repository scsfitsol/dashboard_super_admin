import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const Overview = (props) => {
  const color = {
    0: "bg-info",
    1: "bg-success",
    2: "bg-primary",
    3: "bg-danger",
    4: "bg-warning",
    5: "bg-info",
    6: "bg-success",
    7: "bg-primary",
    8: "bg-danger",
    9: "bg-warning",
    10: "bg-info",
    11: "bg-success",
    12: "bg-primary",
  };
  return (
    <React.Fragment>
      <Col xl={12}>
        <Card style={{ height: "400px", overflowY: "scroll" }}>
          <CardBody>
            {props.data.map((data, index) => {
              return (
                <div>
                  <div className="pb-4 border-bottom">
                    <Row className="align-items-center">
                      <Col xs={8}>
                        <p className="mb-2">{data?.name}</p>
                        <h5 className="mb-0 text-bold">{data?.trip} Trip</h5>
                      </Col>
                      <Col xs={4}>
                        <div className="text-end">
                          <div>
                            {props.isPercentage ? (
                              <>
                                {data?.per} %
                                <i className="mdi mdi-arrow-up  ms-1"></i>
                              </>
                            ) : (
                              <>{data?.per} CO2 in Tons</>
                            )}
                          </div>

                          <div className="progress progress-sm mt-3">
                            <div
                              className={`progress-bar ${color[index]}`}
                              role="progressbar"
                              style={{ width: `${data?.per}%` }}
                              aria-valuenow={data?.per}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>{" "}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            })}
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Overview;
