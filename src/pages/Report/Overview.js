import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const Overview = () => {
  return (
    <React.Fragment>
      <Col xl={12}>
        <Card>
          <CardBody>
            <div>
              <div className="pb-4 border-bottom">
                <Row className="align-items-center">
                  <Col xs={8}>
                    <p className="mb-2">ABC LTD.</p>
                    <h4 className="mb-0">524 Trip</h4>
                  </Col>
                  <Col xs={4}>
                    <div className="text-end">
                      <div>
                        80 % <i className="mdi mdi-arrow-up  ms-1"></i>
                      </div>
                      <div className="progress progress-sm mt-3">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="62"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="py-4 border-bottom">
                <Row className="align-items-center">
                  <Col xs={8}>
                    <p className="mb-2">SAM LTD.</p>
                    <h4 className="mb-0">1524 Trip</h4>
                  </Col>
                  <Col xs={4}>
                    <div className="text-end">
                      <div>
                        10 %{" "}
                        <i className="mdi mdi-arrow-up text-success ms-1"></i>
                      </div>
                      <div className="progress progress-sm mt-3">
                        <div
                          className="progress-bar bg-success "
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="py-4 border-bottom">
                <Row className="align-items-center">
                  <Col xs={8}>
                    <p className="mb-2">QUE LTD.</p>
                    <h4 className="mb-0">200 Trip</h4>
                  </Col>
                  <Col xs={4}>
                    <div className="text-end">
                      <div>
                        70 %{" "}
                        <i className="mdi mdi-arrow-down text-warning ms-1"></i>
                      </div>
                      <div className="progress progress-sm mt-3">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="pt-3 ">
                <Row className="align-items-center">
                  <Col xs={8}>
                    <p className="mb-2">WAR LTD.</p>
                    <h5 className="mb-0">300 Trip</h5>
                  </Col>
                  <Col xs={4}>
                    <div className="text-end">
                      <div>
                        50 %{" "}
                        <i className="mdi mdi-arrow-down text-warning ms-1"></i>
                      </div>
                      <div className="progress progress-sm mt-3">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Overview;
