import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import useHttp from "../../components/Hook/Use-http";
import CONSTANT, {
  DeleteButton,
  EditButton,
  getTableData,
  StatusButton,
} from "../Utility/constnt";

const Trip = () => {
  const [showModel, setShowModel] = useState(false);
  const [showModel_1, setShowModel_1] = useState(false);
  const [tripData, setTripData] = useState([]);
  const [actionData, setActionData] = useState({});
  const [confirm_both, setConfirm_both] = useState(false);
  const [flag, setFlag] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [plantData, setPlantData] = useState([]);
  const [vehiclesData, setVehiclesData] = useState([]);
  const [vehiclesDataRes, setVehiclesDataRes] = useState([]);
  const [driverData, setDriverData] = useState([]);
  const [transporterData, setTransporterData] = useState([]);
  const [clientData, setClientData] = useState([])
  const API_CALL = useHttp();

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAllTrip, tripDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllDriver, driverDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllVehicle, vehiclesDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllPlant, plantDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllClient, clientDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllTransporter, transporterDataHandler);
    })();
  }, [flag]);

  const driverDataHandler = (res) => {
    setDriverData(res?.data)
  };
  const transporterDataHandler = (res) => {
    setTransporterData(res?.data)
  };
  const vehiclesDataHandler = (res) => {
    setVehiclesData(res?.data)
    setVehiclesDataRes(res?.data);
  };
  const plantDataHandler = (res) => {
    setPlantData(res?.data);
  };
  const clientDataHandler = (res) => {
    setClientData(res?.data);
  };
  const goToMapPage = (trip) => {
    window.location.assign(`/tracking/${trip?.id}`);
  } 

  const tripDataHandler = (res) => {
    setTripData(
      res?.data.map((tripData, index) => {
        return {
          ...tripData,
          no: index + 1,
          clientName: tripData?.client?.name,
          transporterName: tripData?.transporter?.transporterName,
          driverName: tripData?.driver?.name,
          driverPhoneNumber: tripData?.driver?.mobile,
          vehicleNumber: tripData?.vehicle?.registrationNumber,
          plantName: tripData?.plant?.unitName,
          startDateAndTime:
            moment(tripData?.startDateAndTime).format("DD-MM-YYYY") +
            " : " +
            moment(tripData?.startDateAndTime).format("LT"),
          targetedDateAndTime:
            moment(tripData?.targetedDateAndTime).format("DD-MM-YYYY") +
            " : " +
            moment(tripData?.targetedDateAndTime).format("LT"),
          mapView: <i role="button" onClick={() => goToMapPage(tripData)} className="mdi mdi-eye-circle-outline fs-4"></i>,
          statusData: (
            <>
              <StatusButton
                value={tripData?.status}
                onClick={() => {
                  onEditTrip(tripData);
                  setShowModel_1(true);
                }}
              />
            </>
          ),
          action: (
            <>
              <EditButton
                onClick={() => {
                  onEditTrip(tripData);
                  setShowModel(true);
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
    setConfirm_both(true);
    setActionData(tripData);
  };

  const onEditTrip = (tripData) => {
    setActionData(tripData);
    setIsEdit(true);
  };

  const onDeleteDriver = () => {
    const URL = {
      endpoint: `/trip/${actionData?.id}`,
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
      const ClientData = plantData.filter((e) => e.id === payload?.plantId);
      const TransporterData = vehiclesData.filter(
        (e) => e.id === payload?.vehicleId
      );
      payload.clientId = ClientData[0]?.client?.id;
      payload.transporterId = TransporterData[0]?.transporter?.id;
      if (actionData?.id) {
        const URL = {
          endpoint: `/trip/${actionData?.id}`,
          type: "PATCH",
        };
        API_CALL.sendRequest(
          URL,
          () => setFlag((previous) => !previous),
          payload,
          "Driver Update Successfully"
        );
        setIsEdit(false);
      } else {
        API_CALL.sendRequest(
          CONSTANT.API.addTrip,
          () => setFlag((previous) => !previous),
          payload,
          "Driver Add Successfully"
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
          style={{
            zIndex: '99'
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
        modalTitle={isEdit ? "Edit Trip" : "Add Trip"}
        onSubmit={(data) => onSubmitForm(data)}
        data={CONSTANT.FORM_FIELDS.TRIP}
        defaultData={actionData}
        formData={false}
        isEdit={isEdit}
        option={{
          vehicleId: vehiclesDataRes.map((data) => {
            return { label: data.registrationNumber, value: data.id };
          }),
          plantId: plantData.map((data) => {
            return { label: data.unitName, value: data.id };
          }),
          driverId: driverData.map((data) => {
            return { label: data.name, value: data.id };
          }),
          transporterId: transporterData.map((data) => {
            return { label: data.transporterName, value: data.id };
          }),
          clientId: clientData.map((data) => {
            return { label: data.name, value: data.id };
          }),
        }}
      />
      <CustomModal
        modalType="formModal"
        show={showModel_1}
        close={() => setShowModel_1(false)}
        modalTitle="Edit Trip"
        onSubmit={(data) => onSubmitForm(data)}
        data={CONSTANT.FORM_FIELDS.TRIP_STATUS}
        defaultData={actionData}
        formData={false}
        isEdit={isEdit}
      />
      {
        confirm_both ? (
          <SweetAlert
            title="Are you sure?"
            warning
            showCancel
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() => {
              onDeleteDriver();
              setConfirm_both(false);
            }}
            onCancel={() => {
              setConfirm_both(false);
            }}
          >
            You won't be able to revert this!
          </SweetAlert>
        ) : null
      }
    </React.Fragment >
  );
};

export default Trip;
