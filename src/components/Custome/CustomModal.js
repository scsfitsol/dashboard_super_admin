import { AvField, AvForm } from "availity-reactstrap-validation";
import React, { useState } from "react";
import { Col, Label, Modal, Row } from "reactstrap";
import Select from "react-select";

const CustomModal = (props) => {
  const { modalType, show, close, modalTitle, data } = props;
  const [inputData, setInputData] = useState({});

  const onChangeInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSelectValue = (selected, key) => {
    console.log(selected);
    setInputData({ ...inputData, [key]: selected.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(inputData);
    close();
  };

  return (
    <>
      <Col sm={6} md={4} xl={3}>
        {modalType == "formModal" && (
          <Modal isOpen={show}>
            <div className="modal-body">
              <h5>{modalTitle}</h5>
            </div>

            <div>
              <AvForm className="needs-validation" onSubmit={onSubmitForm}>
                <Row>
                  <Col md="12">
                    <div className="mb-3 px-3">
                      {data.map((fieldName, index) => {
                        if (
                          fieldName.type === "text" ||
                          fieldName.type === "number"
                        ) {
                          return (
                            <div className="mb-4">
                              <Label htmlFor="validationCustom01">
                                {fieldName?.label}
                              </Label>
                              <AvField
                                name={fieldName?.name}
                                placeholder={fieldName?.placeholder}
                                type={
                                  fieldName?.type ? fieldName?.type : "text"
                                }
                                errorMessage={
                                  fieldName?.errorMessage
                                    ? fieldName?.errorMessage
                                    : ""
                                }
                                className="form-control"
                                validate={{
                                  required: {
                                    value: fieldName?.validate
                                      ? fieldName?.validate
                                      : false,
                                  },
                                }}
                                id={"validationCustom" + index}
                                onChange={onChangeInput}
                              />
                            </div>
                          );
                        } else if (fieldName.type === "SingleSelect") {
                          return (
                            <div className="mb-4">
                              <Label>{fieldName?.label}</Label>
                              <Select
                                value={inputData[fieldName?.name]}
                                options={fieldName?.options}
                                classNamePrefix="select2-selection"
                                onChange={(selected) =>
                                  onSelectValue(selected, fieldName?.name)
                                }
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
              </AvForm>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                onClick={close}
                className="btn btn-primary waves-effect"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary waves-effect waves-light"
                onClick={onSubmitForm}
              >
                Submit
              </button>
            </div>
          </Modal>
        )}
      </Col>
    </>
  );
};

export default CustomModal;
