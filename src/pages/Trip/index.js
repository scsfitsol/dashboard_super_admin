import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import useHttp from "../../components/Hook/Use-http";
import { getAllTrip } from "../Utility/API/api";
import Services from "../Utility/API/service";
import CONSTANT, {
  Category,
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
  const API_CALL = useHttp();

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAllTrip, tripDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllDriver, driverDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllVehicle, vehiclesDataHandler);
      API_CALL.sendRequest(CONSTANT.API.getAllPlant, plantDataHandler);
    })();
  }, [flag]);

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
  const vehiclesDataHandler = (res) => {
    setVehiclesData(res?.data);
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
  const plantDataHandler = (res) => {
    setPlantData(res?.data);
    CONSTANT.FORM_FIELDS.TRIP.push({
      name: "plantId",
      label: "Plant Name",
      placeholder: "Plant Name",
      type: "SingleSelect",
      options: res?.data.map((data) => {
        return { label: data.unitName, value: data.id };
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
          statusData: (
            <>
              <StatusButton
                value={tripData?.status}
                onClick={() => {
                  onEditTrip(tripData);
                  onUpdateStatus(true);
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

  const onUpdateStatus = () => {
    setShowModel_1(true);
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

  const callAsynchronousOperation = async (item) => {
    // setIsEdit(false);
  };

  // For Update Bulk Status
  // const updateAllTripToCompleted = () => {
  //   (async () => {
  //     for (let i = 0; i < tripData.length; i++) {
  //       const payload = {
  //         status: "3",
  //         driverId: tripData[i]?.driver?.id,
  //         vehicleId: tripData[i]?.vehicle?.id,
  //       };

  //       try {
  //         const res = await Services.patch(
  //           `/trip/updateTripStatus/${tripData[i]?.id}`,
  //           payload
  //         );
  //         console.log("Success", tripData[i]);
  //       } catch (err) {
  //         console.log("Error", tripData[i]);
  //       }
  //     }
  //   })();
  // };

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
        modalTitle={isEdit ? "Edit Trip" : "Add Trip"}
        onSubmit={(data) => onSubmitForm(data)}
        data={CONSTANT.FORM_FIELDS.TRIP}
        defaultData={actionData}
        formData={false}
        isEdit={isEdit}
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
      {confirm_both ? (
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
      ) : null}
    </React.Fragment>
  );
};

export default Trip;
