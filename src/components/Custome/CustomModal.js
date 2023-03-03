import React, { useState } from "react";
import { Col, Label, Modal, Row, Input } from "reactstrap";
import Select from "react-select";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import moment from "moment/moment";
const CustomModal = (props) => {
  const {
    modalType,
    show,
    close,
    modalTitle,
    data,
    onSubmit,
    defaultData,
    formData,
    isEdit,
    onChangeFunction = {},
    option = {},
  } = props;
  const todayDate = moment(new Date()).format(
    "YYYY-MM-DDTHH:MM"
  );
  const [inputData, setInputData] = useState({ startDateAndTime: todayDate, targetedDateAndTime: todayDate });
  const [selectedValue, setSelectedValue] = useState({});
  const [isChange, setIsChange] = useState(false);

  const onChangeInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const onSelectValue = (selected, key) => {
    setSelectedValue({ ...selectedValue, [key]: selected });
    setInputData({ ...inputData, [key]: selected.value });
    setIsChange(true);
  };
  const onChangeFileValue = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.files[0] });
  };

  const onChangeGoogleAddress = (e, fieldName) => {
    if (fieldName === 'sourceLocation') {
      setInputData({ ...inputData, sourceLocation: e?.label, sourceId: e?.value?.place_id })
    }
    else {
      setInputData({ ...inputData, destinationLocation: e?.label, destinationId: e?.value?.place_id })
    }
  }

  let payload = new FormData();
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (formData) {
      Object.keys(inputData).map((key) => {
        payload.append(key, inputData[key]);
      });
      onSubmit(payload);
    } else {
      onSubmit(inputData);
    }
    close();
  };

  const onCloseModal = () => {
    close();
    setInputData({});
    setIsChange(false);
    setSelectedValue({});
  };

  const onChangeNumber = (value, country, e, formattedValue) => {
    setInputData({ ...inputData, mobile: value.replace(country.dialCode, ''), countryCode: country.dialCode });
  }

  return (
    <>
      <Col sm={6} md={4} xl={3}>
        {modalType == "formModal" && (
          <Modal isOpen={show}>
            <div className="modal-body">
              <h5>{modalTitle}</h5>
            </div>

            <div>
              <form
                className="needs-validation"
                onSubmit={onSubmitForm}
                style={{
                  maxHeight: "550px",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                <Row>
                  <Col md="12">
                    <div className="mb-3 px-3">
                      {data.map((fieldName, index) => {
                        if (
                          fieldName.type === "text" ||
                          fieldName.type === "number"
                        ) {
                          return (
                            <div key={index} className="mb-4">
                              <Label htmlFor="validationCustom01">
                                {fieldName?.label}
                              </Label>
                              <input
                                autoComplete="no"
                                name={fieldName?.name}
                                defaultValue={
                                  defaultData &&
                                  defaultData !== "null" &&
                                  defaultData !== "undefined" &&
                                  defaultData[fieldName?.name]
                                }
                                placeholder={fieldName?.placeholder}
                                type={
                                  fieldName?.type ? fieldName?.type : "text"
                                }
                                className="form-control"
                                required={fieldName?.required}
                                id={"validationCustom" + index}
                                onChange={onChangeInput}
                              />
                            </div>
                          );
                        } else if (fieldName.type === "SingleSelect") {
                          const OldValue = isEdit
                            ? defaultData[fieldName?.name]
                            : null;
                          return (
                            <div key={index} className="mb-4">
                              <Label>{fieldName?.label}</Label>
                              <Select
                                value={
                                  isEdit
                                    ? !isChange
                                      ? option[fieldName?.name] || fieldName?.options.filter(
                                        (e) => e.value === OldValue
                                      )
                                      : selectedValue[fieldName?.name]
                                    : selectedValue[fieldName?.name]
                                }
                                options={
                                  fieldName?.options
                                    ? fieldName?.options
                                    : option[fieldName?.name]
                                      ? option[fieldName?.name]
                                      : []
                                }
                                selected={"clientName" == fieldName?.name}
                                classNamePrefix="select2-selection"
                                onChange={(selected) => {
                                  onSelectValue(selected, fieldName?.name);
                                  if (onChangeFunction[fieldName?.name]) {
                                    onChangeFunction[fieldName?.name](selected);
                                  }
                                }}
                              />
                            </div>
                          );
                        } else if (fieldName.type === "selectTime") {
                          return (
                            <div key={index} className="mb-4">
                              <Label>{fieldName?.label}</Label>
                              <input
                                name={fieldName?.name}
                                className="form-control"
                                type="time"
                                defaultValue="13:45:00"
                                id="example-time-input"
                                onChange={onChangeInput}
                                required={fieldName?.required}
                              />
                            </div>
                          );
                        } else if (fieldName.type === "GoogleAutoComplete") {
                          return (
                            <div key={index} className="mb-4">
                              <Label>{fieldName?.label}</Label><br />
                              <GooglePlacesAutocomplete
                                apiKey={'AIzaSyAIh5rjUYY8SoLb14LUnxrbhD2XnRsF_78'}
                                apiOptions={{
                                  types: ['(cities)'],
                                  componentRestrictions: { country: "IN" },
                                }}
                                selectProps={{
                                  placeholder: fieldName.placeholder,
                                  onChange: (e) => onChangeGoogleAddress(e, fieldName?.name)
                                }}
                              />
                            </div>
                          );
                        } else if (fieldName.type === "mobileNumber") {
                          return (
                            <div key={index} className="mb-4">
                              <Label>{fieldName?.label}</Label><br />
                              <PhoneInput
                                inputProps={{
                                  name: "mobile"
                                }}
                                country="in"
                                onChange={(value, country, e, formattedValue) => onChangeNumber(value, country, e, formattedValue)}
                                inputStyle={{
                                  width: '100%'
                                }}
                              />
                            </div>
                          );
                        } else if (fieldName.type === "date") {
                          return (
                            <div key={index} className="mb-4">
                              <Label>{fieldName?.label}</Label>
                              <input
                                name={fieldName?.name}
                                className="form-control"
                                type="date"
                                defaultValue="13:45:00"
                                id="example-time-input"
                                onChange={onChangeInput}
                                required={fieldName?.required}
                              />
                            </div>
                          );
                        } else if (fieldName.type === "selectDate&Time") {
                          return (
                            <div key={index} className="mb-4">
                              <Label>{fieldName?.label}</Label>
                              <input
                                name={fieldName?.name}
                                className="form-control"
                                type="datetime-local"
                                defaultValue={todayDate}
                                id="example-datetime-local-input"
                                onChange={onChangeInput}
                                required={fieldName?.required}
                              />
                            </div>
                          );
                        } else if (fieldName.type === "file") {
                          return (
                            <div key={index} className="mb-4">
                              <Label>{fieldName?.label}</Label>
                              <Input
                                type={fieldName.type}
                                className="form-control"
                                name={fieldName?.name}
                                onChange={onChangeFileValue}
                                required={fieldName?.required}
                              />
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  </Col>
                </Row>
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={onCloseModal}
                    className="btn btn-primary waves-effect"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </Col>
    </>
  );
};

export default CustomModal;
