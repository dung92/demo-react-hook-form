import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

const RenderTextField = (props) => {
  const textError =
    props.errors && props.errors.textField && props.errors.textField.message;
  return (
    <Controller
      name="textField"
      control={props.control}
      rules={{ required: "Demo" }}
      render={(props) => (
        <TextField
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value ? props.value : ''}
          helperText={textError ? textError : ""}
          error={!!textError}
        />
      )}
    />
  );
};
export default RenderTextField;
