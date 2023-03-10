import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, NavLink, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import useHttp from "../../components/Hook/Use-http";
import CONSTANT, {
  AllocateAndNotAllocate,
  DeleteButton,
  EditButton,
  getTableData,
} from "../Utility/constnt";

const Vehicals = () => {
  const [showModel, setShowModel] = useState(false);
  const [vehicleData, setVehicleData] = useState([]);
  const [actionData, setActionData] = useState({});
  const [confirm_both, setConfirm_both] = useState(false);
  const [flag, setFlag] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [transporterData, setTransporterData] = useState([])
  const API_CALL = useHttp();
  // const history = useHistory()

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAllVehicle, vehicleDataHandler);
      API_CALL.sendRequest(
        CONSTANT.API.getAllTransporter,
        transporterDataHandler
      );
    })();
  }, [flag]);

  const transporterDataHandler = (res) => {
    setTransporterData(res?.data)
  };

  const GoToVehicleInfo = (vehicleData) => {
    window.location.assign(`/vehiclesInfo/${vehicleData?.id}`);
  };

  const vehicleDataHandler = (res) => {
    setVehicleData(
      res?.data.map((vehicleData, index) => {
        return {
          ...vehicleData,
          no: index + 1,
          RegistrationNumbers: (
            <NavLink
              className="TableLink"
              onClick={() => GoToVehicleInfo(vehicleData)}
              style={{ color: "gray", cursor: "pointer" }}
            >
              {vehicleData?.registrationNumber}
            </NavLink>
          ),
          Allocated: <AllocateAndNotAllocate value={vehicleData?.allocate} />,
          transporterName: vehicleData?.transporter?.transporterName,
          action: (
            <>
              <EditButton
                onClick={() => {
                  onEditVehicle(vehicleData);
                }}
              />
              <DeleteButton
                onClick={() => {
                  openConfirmationDeleteModal(vehicleData);
                }}
              />
            </>
          ),
        };
      })
    );
  };

  const openConfirmationDeleteModal = (vehicleData) => {
    setConfirm_both(true);
    setActionData(vehicleData);
  };

  const onEditVehicle = (vehicleData) => {
    setActionData(vehicleData);
    setShowModel(true);
    setIsEdit(true);
  };

  const onDeleteVehicle = () => {
    const URL = {
      endpoint: `/vehicle/${actionData?.id}`,
      type: "DELETE",
    };
    API_CALL.sendRequest(
      URL,
      () => setFlag((previous) => !previous),
      null,
      "Delete Successfully"
    );
  };

  const onSubmitForm = (payload) => {
    (async () => {
      if (actionData?.id) {
        const URL = {
          endpoint: `/vehicle/${actionData?.id}`,
          type: "PATCH",
        };
        API_CALL.sendRequest(
          URL,
          () => setFlag((previous) => !previous),
          payload,
          "Vehicle Update Successfully"
        );
        setIsEdit(false);
      } else {
        API_CALL.sendRequest(
          CONSTANT.API.addVehicle,
          () => setFlag((previous) => !previous),
          payload,
          "Vehicle Add Successfully"
        );
      }
    })();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Vehicles</h4>

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
          onClick={() => {
            setShowModel(true);
            setIsEdit(false);
            setActionData({});
          }}
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
        modalTitle={isEdit ? "Edit Vehicles" : "Add Vehicles"}
        onSubmit={(data) => onSubmitForm(data)}
        data={CONSTANT.FORM_FIELDS.VEHICLES}
        defaultData={actionData}
        formData={false}
        isEdit={isEdit}
        option={{
          transporterId: transporterData.map((data) => {
            return { label: data.transporterName, value: data.id };
          }),
        }}
      />
      {confirm_both ? (
        <SweetAlert
          title="Are you sure?"
          warning
          showCancel
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          onConfirm={() => {
            onDeleteVehicle();
            setConfirm_both(false);
          }}
          onCancel={() => {
            setConfirm_both(false);
          }}
        >
          You won't be able to revert this!
        </SweetAlert>
      ) : null}
    </React.Fragment>
  );
};

export default Vehicals;
