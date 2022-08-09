import "./formInput.scss";

const FormInput = ({ label, ...otherProps }) => {
  const labelClass = `form-input-label ${otherProps.value.length ? 'shrink' : ''}`;

  return (
    <div className="group">
      <input className="form-input" {...otherProps}/>
      {label && <label className={labelClass}>{label}</label>}
    </div>
  );
};

export default FormInput;