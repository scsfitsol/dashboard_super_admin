import React, { useEffect, useState } from "react";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import { getAllPlant } from "../Utility/API/api";
import CONSTANT, {
  DeleteButton,
  EditButton,
  getTableData,
} from "../Utility/constnt";

const Plants = () => {
  const [showModel, setShowModel] = useState(false);
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getAllPlant();
      if (res?.data?.data.length > 0) {
        setPlantData(
          res?.data?.data.map((plantData, index) => {
            return {
              ...plantData,
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
              <h4 className="page-title mb-0 font-size-18">Plants</h4>

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
          <i className="bx bx-plus"></i> &nbsp; Add Plant
        </Button>
      </div>
      <Table
        title="Plants List"
        data={{ columns: getTableData("plant")["columns"], rows: plantData }}
      />
      <CustomModal
        modalType="formModal"
        show={showModel}
        close={() => setShowModel(false)}
        modalTitle="Add Plant"
        data={CONSTANT.FORM_FIELDS.PLANT}
      />
    </React.Fragment>
  );
};

export default Plants;
