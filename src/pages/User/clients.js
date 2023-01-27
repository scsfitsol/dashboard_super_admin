import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Row } from "reactstrap";
import CustomModal from "../../components/Custome/CustomModal";
import Table from "../../components/Custome/table";
import useHttp from "../../components/Hook/Use-http";
import { addClient, getAllClient } from "../Utility/API/api";
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
  const [deleteId, setDeleteId] = useState(null);
  const [editData, setEditData] = useState({});
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
              <EditButton />
              <DeleteButton
                onClick={() => {
                  openDeleteModal(clientData.id);
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
      API_CALL.sendRequest(
        CONSTANT.API.addClient,
        null,
        payload,
        "Client Add Successfully"
      );
      setFlag(!flag);
    })();
  };

  const openDeleteModal = (id) => {
    setconfirm_both(true);
    setDeleteId(id);
  };

  const onDeleteClient = () => {
    const URL = {
      endpoint: `/client/${deleteId}`,
      type: "DELETE",
    };
    API_CALL.sendRequest(URL, null, null, "Delete Successfully");
    setFlag(!flag);
  };

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
          onClick={() => setShowModel(true)}
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
