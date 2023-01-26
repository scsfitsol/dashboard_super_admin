import React, { useEffect, useState } from "react";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import useHttp from "../../components/Hook/Use-http";
import CONSTANT, {
  DeleteButton,
  EditButton,
  getTableData,
} from "../Utility/constnt";

const Vehicals = () => {
  const [showModel, setShowModel] = useState(false);
  const [vehicleData, setVehicleData] = useState([]);
  const API_CALL = useHttp();

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAllVehicle, vehicleDataHandler);
    })();
  }, []);

  const vehicleDataHandler = (res) => {
    setVehicleData(
      res?.data.map((vehicleData, index) => {
        return {
          ...vehicleData,
          no: index + 1,
          transporterName: vehicleData?.transporter?.transporterName,
          action: (
            <>
              <EditButton />
              <DeleteButton />
            </>
          ),
        };
      })
    );
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Vehicals</h4>

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
          Add Vehicle
        </Button>
      </div>
      <Table
        title="Vehicles List"
        data={{
          columns: getTableData("vehicles")["columns"],
          rows: vehicleData,
        }}
      />

      <CustomModal
        modalType="formModal"
        show={showModel}
        close={() => setShowModel(false)}
        modalTitle="Add Vehicals"
        data={CONSTANT.FORM_FIELDS.VEHICLES}
        defaultData=""
      />
    </React.Fragment>
  );
};

export default Vehicals;
