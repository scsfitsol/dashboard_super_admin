import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import useHttp from "../../components/Hook/Use-http";
import { getAllTrip } from "../Utility/API/api";
import CONSTANT, {
  Category,
  DeleteButton,
  EditButton,
  getTableData,
} from "../Utility/constnt";

const Trip = () => {
  const [showModel, setShowModel] = useState(false);
  const [tripData, setTripData] = useState([]);
  const [actionData, setActionData] = useState({});
  const [confirm_both, setconfirm_both] = useState(false);
  const [flag, setFlag] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const API_CALL = useHttp();

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAllTrip, tripDataHandler);
      API_CALL.sendRequest(
        CONSTANT.API.getAllTransporter,
        transporterDataHandler
      );
      API_CALL.sendRequest(CONSTANT.API.getAllDriver, driverDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllClient, clientDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllVehicle, vehiclesDataHandler);
    })();
  }, []);

  const transporterDataHandler = (res) => {
    CONSTANT.FORM_FIELDS.TRIP.push({
      name: "transporterId",
      label: "Transporter",
      placeholder: "Transporter",
      type: "SingleSelect",
      options: res?.data.map((data) => {
        return { label: data.transporterName, value: data.id };
      }),
    });
  };
  const driverDataHandler = (res) => {
    CONSTANT.FORM_FIELDS.TRIP.push({
      name: "driverId",
      label: "Driver Name",
      placeholder: "Driver Name",
      type: "SingleSelect",
      options: res?.data.map((data) => {
        return { label: data.name, value: data.id };
      }),
    });
  };
  const clientDataHandler = (res) => {
    CONSTANT.FORM_FIELDS.TRIP.push({
      name: "clientId",
      label: "Client Name",
      placeholder: "Client Name",
      type: "SingleSelect",
      options: res?.data.map((data) => {
        return { label: data.name, value: data.id };
      }),
    });
  };
  const vehiclesDataHandler = (res) => {
    CONSTANT.FORM_FIELDS.TRIP.push({
      name: "vehicleId",
      label: "Vehicle Name",
      placeholder: "Vehicle Name",
      type: "SingleSelect",
      options: res?.data.map((data) => {
        return { label: data.registrationNumber, value: data.id };
      }),
    });
  };

  const tripDataHandler = (res) => {
    setTripData(
      res?.data.map((tripData, index) => {
        return {
          ...tripData,
          no: index + 1,
          clientName: tripData?.client?.name,
          driverName: tripData?.driver?.name,
          driverPhoneNumber: tripData?.driver?.mobile,
          vehicleNumber: tripData?.vehicle?.registrationNumber,
          status: Category[tripData?.status],
          action: (
            <>
              <EditButton
                onClick={() => {
                  onEditTrip(tripData);
                  setIsEdit(true);
                }}
              />
              <DeleteButton
                onClick={() => {
                  openConfirmationDeleteModal(tripData);
                }}
              />
            </>
          ),
        };
      })
    );
  };

  const openConfirmationDeleteModal = (tripData) => {
    setconfirm_both(true);
    setActionData(tripData);
  };

  const onEditTrip = (tripData) => {
    setActionData(tripData);
    setShowModel(true);
    setIsEdit(true);
  };

  const onDeleteDriver = () => {
    const URL = {
      endpoint: `/trip/${actionData?.id}`,
      type: "DELETE",
    };
    API_CALL.sendRequest(URL, null, null, "Delete Successfully");
    setFlag(!flag);
  };

  const onSubmitForm = (payload) => {
    (async () => {
      if (actionData?.id) {
        const URL = {
          endpoint: `/trip/${actionData?.id}`,
          type: "PATCH",
        };
        API_CALL.sendRequest(URL, null, payload, "Driver Update Successfully");
        setIsEdit(false);
        setFlag(!flag);
      } else {
        API_CALL.sendRequest(
          CONSTANT.API.addTrip,
          null,
          payload,
          "Driver Add Successfully"
        );
        setFlag(!flag);
      }
    })();
  };

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
          onClick={() => {
            setShowModel(true);
            setIsEdit(false);
            setActionData({});
          }}
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
        onSubmit={(data) => onSubmitForm(data)}
        data={CONSTANT.FORM_FIELDS.TRIP}
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
            onDeleteDriver();
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

export default Trip;
