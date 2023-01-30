import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import useHttp from "../../components/Hook/Use-http";
import { getAllTransporter } from "../Utility/API/api";
import CONSTANT, {
  DeleteButton,
  EditButton,
  getTableData,
} from "../Utility/constnt";

const Transporter = () => {
  const [showModel, setShowModel] = useState(false);
  const [transporterData, setTransporterData] = useState([]);
  const [actionData, setActionData] = useState({});
  const [confirm_both, setconfirm_both] = useState(false);
  const [flag, setFlag] = useState(true);
  const API_CALL = useHttp();

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(
        CONSTANT.API.getAllTransporter,
        transporterDataHandler
      );
    })();
  }, [flag]);

  const transporterDataHandler = (res) => {
    setTransporterData(
      res?.data.map((transporterData, index) => {
        return {
          ...transporterData,
          no: index + 1,
          clientId: transporterData.id,
          action: (
            <>
              <EditButton
                onClick={() => {
                  onEditTransporter(transporterData);
                }}
              />
              <DeleteButton
                onClick={() => {
                  openConfirmationDeleteModal(transporterData);
                }}
              />
            </>
          ),
        };
      })
    );
  };

  const openConfirmationDeleteModal = (transporterData) => {
    setconfirm_both(true);
    setActionData(transporterData);
  };

  const onEditTransporter = (transporterData) => {
    setActionData(transporterData);
    setShowModel(true);
  };

  const onDeleteDriver = () => {
    const URL = {
      endpoint: `/transporter/${actionData?.id}`,
      type: "DELETE",
    };
    API_CALL.sendRequest(URL, null, null, "Delete Successfully");
    setFlag(!flag);
  };

  const onSubmitForm = (payload) => {
    (async () => {
      if (actionData?.id) {
        const URL = {
          endpoint: `/transporter/${actionData?.id}`,
          type: "PATCH",
        };
        API_CALL.sendRequest(
          URL,
          null,
          payload,
          "Transporter Update Successfully"
        );
        setFlag(!flag);
      } else {
        API_CALL.sendRequest(
          CONSTANT.API.addTransporter,
          null,
          payload,
          "Transporter Add Successfully"
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
              <h4 className="page-title mb-0 font-size-18">Transporter</h4>

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
          Add Transporter
        </Button>
      </div>
      <Table
        title="Transporter List"
        data={{
          columns: getTableData("transporter")["columns"],
          rows: transporterData,
        }}
      />
      <CustomModal
        modalType="formModal"
        show={showModel}
        close={() => setShowModel(false)}
        modalTitle="Add Client"
        onSubmit={(data) => onSubmitForm(data)}
        data={CONSTANT.FORM_FIELDS.TRANSPORTER}
        defaultData={actionData}
        formData={false}
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

export default Transporter;
