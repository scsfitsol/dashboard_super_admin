import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import useHttp from "../../components/Hook/Use-http";
import { getAllClient } from "../Utility/API/api";
import CONSTANT, {
  DeleteButton,
  EditButton,
  getTableData,
} from "../Utility/constnt";

const Clients = () => {
  const [showModel, setShowModel] = useState(false);
  const [clientData, setClientData] = useState([]);
  const [flag, setFlag] = useState(true);
  const [confirm_both, setconfirm_both] = useState(false);
  const [actionData, setActionData] = useState({});
  const [password, setPassword] = useState();
  const API_CALL = useHttp();

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAllClient, clientDataHandler);
    })();
  }, [flag]);

  const clientDataHandler = (res) => {
    setClientData(
      res?.data.map((clientData, index) => {
        return {
          ...clientData,
          no: index + 1,
          clientId: clientData.id,
          action: (
            <>
              <EditButton
                onClick={() => {
                  onEditClient(clientData);
                }}
              />
              <DeleteButton
                onClick={() => {
                  openConfirmationDeleteModal(clientData);
                }}
              />
            </>
          ),
        };
      })
    );
  };

  const onSubmitForm = (payload) => {
    (async () => {
      if (actionData?.id) {
        payload.password =
          password.password === "null" && password.password.length > 0
            ? password.password
            : password;

        const URL = {
          endpoint: `/client/${actionData?.id}/?organizationId=${actionData?.organizationId}`,
          type: "PATCH",
        };
        API_CALL.sendRequest(URL, null, payload, "Client Update Successfully");
        setFlag(!flag);
      } else {
        API_CALL.sendRequest(
          CONSTANT.API.addClient,
          null,
          payload,
          "Client Add Successfully"
        );
        setFlag(!flag);
      }
    })();
  };

  const openConfirmationDeleteModal = (clientData) => {
    setconfirm_both(true);
    setActionData(clientData);
  };

  const onDeleteClient = () => {
    const URL = {
      endpoint: `/client/${actionData?.id}/?organizationId=${actionData?.organizationId}`,
      type: "DELETE",
    };
    API_CALL.sendRequest(URL, null, null, "Delete Successfully");
    setFlag(!flag);
  };

  const onEditClient = (clientData) => {
    setActionData(clientData);
    setPassword(clientData?.password);
    setShowModel(true);
  };

  delete actionData["password"];

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Clients</h4>

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
            setActionData();
          }}
        >
          Add Client
        </Button>
      </div>
      <Table
        title="Client List"
        data={{ columns: getTableData("client")["columns"], rows: clientData }}
      />

      <CustomModal
        modalType="formModal"
        show={showModel}
        close={() => setShowModel(false)}
        modalTitle="Add Client"
        onSubmit={(data) => onSubmitForm(data)}
        data={CONSTANT.FORM_FIELDS.CLIENT}
        defaultData={actionData}
        filedata={false}
      />

      {confirm_both ? (
        <SweetAlert
          title="Are you sure?"
          warning
          showCancel
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          onConfirm={() => {
            onDeleteClient();
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

export default Clients;
