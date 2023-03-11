import axios from "axios";
import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button, Modal, NavLink, Row } from "reactstrap";
import CustomModal from "../../../components/Custome/CustomModal";
import Table from "../../../components/Custome/table";
import useHttp from "../../../components/Hook/Use-http";
import Services from "../../Utility/API/service";
import CONSTANT, {
    DeleteButton,
    EditButton,
    getTableData,
} from "../../Utility/constnt";

const Driver = () => {
    const [showModel, setShowModel] = useState(false);
    const [openLicense, setOpenLicense] = useState(false)
    const [currentLicenseURL, setCurrentLicenseURL] = useState('')
    const [driverData, setDriverData] = useState([]);
    const [actionData, setActionData] = useState({});
    const [confirm_both, setConfirm_both] = useState(false);
    const [flag, setFlag] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [driverConsent, setDriverConsent] = useState({})
    const API_CALL = useHttp();

    useEffect(() => {
        (async () => {
            API_CALL.sendRequest(CONSTANT.API.getAllDriver, driverDataHandler);
        })();
    }, [flag]);

    const GoToDriverInfo = (driverData) => {
        window.location.assign(`/driversInfo/${driverData?.id}`);
    }

    const onOpenLicense = (url) => {
        setOpenLicense(!openLicense)
        setCurrentLicenseURL(url)
    }


    const driverDataHandler = async (res) => {
        setDriverData(res?.data)
        for (let index = 0; index < res?.data.length; index++) {
            const consent = await Services.get(`/location/consentApi/${res?.data[index].mobile}`);
            setDriverConsent((previous) => { return { ...previous, [res?.data[index].mobile]: consent } })
        }

    };

    const openConfirmationDeleteModal = (driverData) => {
        setConfirm_both(true);
        setActionData(driverData);
    };

    const onEditDriver = (driverData) => {
        setActionData(driverData);
        setShowModel(true);
        setIsEdit(true);
    };

    const onDeleteDriver = () => {
        const URL = {
            endpoint: `/driver/${actionData?.id}`,
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
                    endpoint: `/driver/${actionData?.id}`,
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
                    CONSTANT.API.addDriver,
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
                            <h4 className="page-title mb-0 font-size-18">Driver</h4>

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
                    Add Driver
                </Button>
            </div>
            <Table
                title="Driver List"
                data={{
                    columns: getTableData("driver")["columns"], rows: driverData.map((driverData, index) => {
                        return {
                            ...driverData,
                            no: index + 1,
                            driverName: <NavLink className="TableLink" onClick={() => GoToDriverInfo(driverData)} style={{ color: "gray", cursor: 'pointer' }} >{driverData.name}</NavLink>,
                            consentValue: driverConsent[driverData.mobile]?.data?.Consent?.status,
                            drivingLicenseImage: <i onClick={() => onOpenLicense(driverData.drivingLicense)} className="mdi mdi-eye-circle-outline fs-3" style={{ cursor: "pointer" }} ></i>,
                            action: (
                                <>
                                    <EditButton
                                        onClick={() => {
                                            onEditDriver(driverData);
                                        }}
                                    />
                                    <DeleteButton
                                        onClick={() => {
                                            openConfirmationDeleteModal(driverData);
                                        }}
                                    />
                                </>
                            ),
                        };
                    })
                }}
            />
            <CustomModal
                modalType="formModal"
                show={showModel}
                close={() => setShowModel(false)}
                modalTitle={isEdit ? "Edit Driver" : "Add Driver"}
                onSubmit={(data) => onSubmitForm(data)}
                data={CONSTANT.FORM_FIELDS.DRIVER}
                defaultData={actionData}
                formData={true}
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

            <Modal
                size="xl"
                isOpen={openLicense}
                toggle={() => {
                    onOpenLicense()
                }}
                scrollable={true}
                id="staticBackdrop"
            >
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Driving License</h5>
                    <button type="button" className="btn-close"
                        onClick={() => {
                            setOpenLicense(false)
                        }} aria-label="Close"></button>
                </div>
                <img src={currentLicenseURL}></img>
            </Modal>
        </React.Fragment>
    );
};

export default Driver;
