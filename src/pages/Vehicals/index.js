import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { useHistory } from "react-router-dom";
import { Button, NavLink, Row } from "reactstrap";
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
  const [actionData, setActionData] = useState({});
  const [confirm_both, setconfirm_both] = useState(false);
  const [flag, setFlag] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const API_CALL = useHttp();
  const history = useHistory()

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAllVehicle, vehicleDataHandler);
      API_CALL.sendRequest(
        CONSTANT.API.getAllTransporter,
        transporterDataHandler
      );
    })();
  }, []);

  const transporterDataHandler = (res) => {
    CONSTANT.FORM_FIELDS.VEHICLES.push({
      name: "transporterId",
      label: "Transporter",
      placeholder: "Transporter",
      type: "SingleSelect",
      options: res?.data.map((data) => {
        return { label: data.transporterName, value: data.id };
      }),
    });
  };


  const GoToVehicleInfo = (vehicleData) => {
    history.push(`/vehiclesInfo/${vehicleData?.id}`, { state: { vehicleData: vehicleData } })
  }

  const vehicleDataHandler = (res) => {
    setVehicleData(
      res?.data.map((vehicleData, index) => {
        return {
          ...vehicleData,
          no: index + 1,
          RegistrationNumbers: <NavLink className="TableLink" onClick={() => GoToVehicleInfo(vehicleData)} style={{ color: "gray", cursor: 'pointer' }} >{vehicleData?.registrationNumber}</NavLink>,
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
    setconfirm_both(true);
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
      () => setFlag((previos) => !previos),
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
          () => setFlag((previos) => !previos),
          payload,
          "Vehicle Update Successfully"
        );
        setIsEdit(false);
      } else {
        API_CALL.sendRequest(
          CONSTANT.API.addVehicle,
          () => setFlag((previos) => !previos),
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
        modalTitle="Add Vehicles"
        onSubmit={(data) => onSubmitForm(data)}
        data={CONSTANT.FORM_FIELDS.VEHICLES}
        defaultData={actionData}
        formData={false}
        isEdit={isEdit}
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
            setconfirm_both(false);
          }}
          onCancel={() => {
            setconfirm_both(false);
          }}
        >
          You won't be able to revert this!
        </SweetAlert>
      ) : null}
    </React.Fragment>
  );
};

export default Vehicals;
