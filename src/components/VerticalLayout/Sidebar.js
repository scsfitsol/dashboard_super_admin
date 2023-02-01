import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import { MyData } from "../../pages/Utility/constnt";
import defaultImage from "../../assets/images/UserImage.jpg";

const Sidebar = (props) => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="h-100">
          <div className="user-wid text-center py-4">
            <div className="user-img">
              <img
                src={
                  MyData.data.profilePic ? MyData.data.profilePic : defaultImage
                }
                alt=""
                className="avatar-md mx-auto rounded-circle"
              />
            </div>

            <div className="mt-3">
              <Link to="#" className="text-dark fw-medium font-size-16">
                {MyData.data.name}
              </Link>
              <p className="text-body mt-1 mb-0 font-size-13">Admin Company</p>
            </div>
          </div>
          <div data-simplebar className="h-100">
            {props.type !== "condensed" ? (
              <SidebarContent />
            ) : (
              <SidebarContent />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = (state) => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
