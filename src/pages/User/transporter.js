import React, { useEffect, useState } from "react";
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
  const API_CALL = useHttp();

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(
        CONSTANT.API.getAllTransporter,
        transporterDataHandler
      );
    })();
  }, []);

  const transporterDataHandler = (res) => {
    setTransporterData(
      res?.data.map((transporterData, index) => {
        return {
          ...transporterData,
          no: index + 1,
          clientId: transporterData.id,
          action: (
            <>
              <EditButton />
              <DeleteButton />
            </>
          ),
        };
      })
    );
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
        data={CONSTANT.FORM_FIELDS.TRANSPORTER}
      />
    </React.Fragment>
  );
};

export default Transporter;
