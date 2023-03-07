import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Row, NavLink } from "reactstrap";
import CustomModal from "../../../components/Custome/CustomModal";
import Table from "../../../components/Custome/table";
import useHttp from "../../../components/Hook/Use-http";


import CONSTANT, {
    DeleteButton,
    EditButton,
    getTableData,
} from "../../Utility/constnt";

const Clients = () => {
    const [showModel, setShowModel] = useState(false);
    const [clientData, setClientData] = useState([]);
    const [flag, setFlag] = useState(true);
    const [confirm_both, setconfirm_both] = useState(false);
    const [actionData, setActionData] = useState({});
    const [password, setPassword] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const API_CALL = useHttp();
    // const history = useHistory()

    useEffect(() => {
        (async () => {
            API_CALL.sendRequest(CONSTANT.API.getAllClient, clientDataHandler);
        })();
    }, [flag]);

    const state = { ClientData: clientData }
    const GoToClientInfo = (clientData) => {
        window.location.assign(`/clientInfo/${clientData?.id}`, state);
    }

    const clientDataHandler = (res) => {
        setClientData(
            res?.data.map((clientData, index) => {
                return {
                    ...clientData,
                    no: index + 1,
                    clientName: <NavLink className="TableLink" onClick={() => GoToClientInfo(clientData)} style={{ color: "gray", cursor: 'pointer' }} >{clientData.name}</NavLink>,
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
                API_CALL.sendRequest(
                    URL,
                    () => setFlag((previos) => !previos),
                    payload,
                    "Client Update Successfully"
                );
                setIsEdit(false);
            } else {
                API_CALL.sendRequest(
                    CONSTANT.API.addClient,
                    () => setFlag((previos) => !previos),
                    payload,
                    "Client Add Successfully"
                );
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
        API_CALL.sendRequest(
            URL,
            () => setFlag((previos) => !previos),
            null,
            "Delete Successfully"
        );
    };

    const onEditClient = (clientData) => {
        setActionData(clientData);
        setPassword(clientData?.password);
        setShowModel(true);
        setIsEdit(true);
    };

    actionData &&
        actionData !== "null" &&
        actionData !== "undefined" &&
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
                        setIsEdit(false);
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
                modalTitle={isEdit ? "Edit Client" : "Add Client"}
                onSubmit={(data) => onSubmitForm(data)}
                data={CONSTANT.FORM_FIELDS.CLIENT}
                defaultData={actionData}
                filedata={false}
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
