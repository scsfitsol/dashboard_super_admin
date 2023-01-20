import React from "react";
import { Button, Row } from "reactstrap";
import Table from "../../components/Custome/table";
import { getTableData } from "../Utility/constnt";

const Admin = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Admin</h4>

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
        <Button
          color="primary"
          className="btn btn-primary waves-effect waves-light mb-3"
        >
          Create Admin
        </Button>
      </div>

      <Table title="Admin List" data={getTableData("admin")} />
    </React.Fragment>
  );
};

export default Admin;
