import React, { useEffect, useState } from "react";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import { getAllTrip } from "../Utility/API/api";
import CONSTANT, {
  DeleteButton,
  EditButton,
  getTableData,
} from "../Utility/constnt";

const Trip = () => {
  const [showModel, setShowModel] = useState(false);
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getAllTrip();
      if (res?.data?.data.length > 0) {
        setTripData(
          res?.data?.data.map((tripData, index) => {
            return {
              ...tripData,
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
              <h4 className="page-title mb-0 font-size-18">Trip</h4>

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
          Add Trip
        </Button>
      </div>
      <Table
        title="Trips List"
        data={{ columns: getTableData("trips")["columns"], rows: tripData }}
      />
      <CustomModal
        modalType="formModal"
        show={showModel}
        close={() => setShowModel(false)}
        modalTitle="Add Trip"
        data={CONSTANT.FORM_FIELDS.TRIP}
        defaultData=""
      />
    </React.Fragment>
  );
};

export default Trip;
