import React, { useState } from "react";
import { Button, Col, Modal, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import CONSTANT, { getTableData } from "../Utility/constnt";

const Admin = () => {
  const [showModel, setShowModel] = useState(false);
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
          onClick={() => setShowModel(true)}
        >
          Add Admin
        </Button>
      </div>

      <Table title="Admin List" data={getTableData("admin")} />

      <CustomModal
        modalType="formModal"
        show={showModel}
        close={() => setShowModel(false)}
        modalTitle="Add User"
        data={CONSTANT.FORM_FIELDS.ADMIN}
      />
    </React.Fragment>
  );
};

export default Admin;
