import "./formInput.scss";

const FormInput = ({ label, ...otherProps }) => {
  const labelClass = `${otherProps.value.length && 'shrink'} form-input-label`;

  return (
    <div className="group">
      <input className="form-input" {...otherProps}/>
      {label && <label className={labelClass}>{label}</label>}
    </div>
  );
};

export default FormInput;