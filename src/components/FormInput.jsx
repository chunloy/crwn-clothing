import { FormGroup, Input, InputLabel } from "./FormInputStyles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <Input {...otherProps} />
      {label && (
        <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>
      )}
    </FormGroup>
  );
};

export default FormInput;
