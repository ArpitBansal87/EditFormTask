import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const FormPanel = () => {
  const [pinCodeDetails, setPinCodeDetails] = useState({});

  const handleSubmit = () => {
    localStorage.setItem("contactData", [
      {
        name: "Brad Pitt",
        address: "123 street",
        city: "SF",
      },
    ]);
  };

  const isPinCodeValid = () => {
    return pinCodeDetails.hasOwnProperty("result");
  };

  const handlePinCodeChange = (event) => {
    const url = "https://api.lenskart.com/v2/utility/checkpincode/";
    const eventTargetValue = event.target.value;
    setPinCodeDetails({});
    if (eventTargetValue.length === 6) {
      console.log(event.target.value);
      fetch(url + "/" + eventTargetValue, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPinCodeDetails(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div classes="formElement">
            <TextField type="text" label="Name" required></TextField>
          </div>
          <div classes="formElement">
            <TextField type="url" label="Image Url"></TextField>
          </div>
          <div classes="formElement">
            <TextField type="text" label="Email" required></TextField>
          </div>
          <div classes="formElement">
            <TextField type="text" label="Phone Number" required></TextField>
          </div>
          <div classes="formElement">
            <TextField
              type="text"
              label="PinCode"
              required
              onChange={handlePinCodeChange}
            ></TextField>
          </div>
          <div classes="formElement">
            <TextField type="text" label="locality"></TextField>
          </div>
          <div classes="formElement">
            <TextField
              type="text"
              label="City"
              disabled
              defaultValue={isPinCodeValid() ? pinCodeDetails.result.city : ""}
            ></TextField>
          </div>
          <div classes="formElement">
            <TextField type="text" label="State"></TextField>
          </div>
          <div classes="formElement">
            <TextField type="text" label="Name"></TextField>
          </div>
          <div classes="formElement">
            <TextField type="text" label="Country"></TextField>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormPanel;
