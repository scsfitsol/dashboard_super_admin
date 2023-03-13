import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Alert, CardBody, Button } from "reactstrap";
// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";
import CONSTANT, { MyData } from "../Utility/constnt";
import CustomForm from "../../components/Custome/CustomForm";
import useHttp from "../../components/Hook/Use-http";
import defaultImage from "../../assets/images/UserImage.jpg";

const UserProfile = (props) => {
  const [flag, setFlag] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const API_CALL = useHttp();


  useEffect(() => {
    (async () => {
      if (localStorage.getItem("authToken")) {
        API_CALL.sendRequest(CONSTANT.API.getMe, getMeDataHandler);
      }
    })();
  }, [flag]);

  const getMeDataHandler = (res) => {
    setUserDetail(res.data[0]);
    MyData.data = res.data[0];
    localStorage.setItem('profileData', JSON.stringify(res.data[0]))
  };

  const onSubmitForm = (payload) => {
    (async () => {
      API_CALL.sendRequest(
        CONSTANT.API.adminUpdate,
        updateMeHandler,
        payload,
        "Your Data Update Successfully"
      );
    })();
  };

  const updateMeHandler = () => {
    setFlag(!flag)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumb title="Fitsol" breadcrumbItem="Profile" />

        <Row>
          <Col lg="12">
            {props.error && props.error ? (
              <Alert color="danger">{props.error}</Alert>
            ) : null}
            {props.success && props.success ? (
              <Alert color="success">{props.success}</Alert>
            ) : null}

            <Card>
              <CardBody>
                <div className="d-flex">
                  <div className="ms-3">
                    <img
                      src={
                        userDetail?.profilePic
                          ? userDetail?.profilePic
                          : defaultImage
                      }
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 align-self-center ms-3">
                    <div className="text-muted">
                      <h5>{userDetail?.name}</h5>
                      <p className="mb-1">{userDetail?.email}</p>
                      <p className="mb-0">{userDetail?.name}</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <h4 className="card-title mb-4">Edit Admin Data</h4>

        <Card>
          <CardBody>
            <CustomForm
              data={CONSTANT.FORM_FIELDS.ADMIN_EDIT}
              onSubmit={(data) => onSubmitForm(data)}
              defaultData={userDetail}
              formData={true}
            // isEdit={isEdit}
            />
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
};

const mapStatetoProps = (state) => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default withRouter(
  connect(mapStatetoProps, { editProfile, resetProfileFlag })(UserProfile)
);
