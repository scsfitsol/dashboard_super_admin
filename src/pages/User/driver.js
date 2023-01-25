import React, { useEffect, useState } from "react";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import { getAllDriver } from "../Utility/API/api";
import CONSTANT, {
  DeleteButton,
  EditButton,
  getTableData,
} from "../Utility/constnt";

const Driver = () => {
  const [showModel, setShowModel] = useState(false);
  const [driverData, setDriverData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getAllDriver();
      if (res?.data?.data.length > 0) {
        setDriverData(
          res?.data?.data.map((driverData, index) => {
            return {
              ...driverData,
              no: index + 1,
              action: (
                <>
                  <EditButton />
                  <DeleteButton />
                </>
              ),
            };
          })
        );
      }
    })();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Driver</h4>

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
          Add Drive
        </Button>
      </div>
      <Table
        title="Driver List"
        data={{ columns: getTableData("driver")["columns"], rows: driverData }}
      />
      <CustomModal
        modalType="formModal"
        show={showModel}
        close={() => setShowModel(false)}
        modalTitle="Add Driver"
        data={CONSTANT.FORM_FIELDS.DRIVER}
      />
    </React.Fragment>
  );
};

export default Driver;
