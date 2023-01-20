import React from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "./datatables.scss";

const Table = ({ title, data }) => {
  return (
    <React.Fragment>
      <div className="page-content mt-0 pt-0">
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle>{title}</CardTitle>
                <MDBDataTable
                  responsive
                  barReverse
                  exportToCSV
                  noRecordsFoundLabel="No Record Found"
                  bordered
                  noBottomColumns
                  data={data}
                  striped
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

Table.defaultProps = {
  title: "",
  data: {
    columns: [],
    rows: [],
  },
};

export default Table;
