import React, { useState } from "react";
import { Col, Label, Row, Input } from "reactstrap";
import Select from "react-select";
import moment from "moment";

const CustomForm = (props) => {
  const { data, onSubmit, defaultData, formData, isEdit, onChangeFunction = {}, option = {}, } = props;
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
  };

  return (
    <>
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
                if (fieldName.type === "text" || fieldName.type === "number") {
                  return (
                    <div key={index} className="mb-4">
                      <Label htmlFor="validationCustom01">
                        {fieldName?.label}
                      </Label>
                      <input
                        name={fieldName?.name}
                        defaultValue={
                          defaultData &&
                          defaultData !== "null" &&
                          defaultData !== "undefined" &&
                          defaultData[fieldName?.name]
                        }
                        placeholder={fieldName?.placeholder}
                        type={fieldName?.type ? fieldName?.type : "text"}
                        errorMessage={
                          fieldName?.errorMessage ? fieldName?.errorMessage : ""
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
                  const OldValue = isEdit ? defaultData[fieldName?.name] : null;
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
                        options={fieldName?.options}
                        selected={"clientName" == fieldName?.name}
                        classNamePrefix="select2-selection"
                        onChange={(selected) =>
                          onSelectValue(selected, fieldName?.name)
                        }
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
                        defaultValue="2019-08-19T13:45:00"
                        id="example-datetime-local-input"
                        onChange={onChangeInput}
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
        <button
          type="submit"
          className="btn btn-primary waves-effect waves-light"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CustomForm;
