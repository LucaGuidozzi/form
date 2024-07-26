function Input({ id, info, reg, error, errorMsg, type = "text", rules = {} }) {
  return (
    <div className="form-field-container">
      <label htmlFor={id}>{info}</label>
      <input {...reg(info, rules)} type={type} id={id} placeholder={info} />
      {error && <p style={{ color: "red", fontSize: "14px" }}>{errorMsg}</p>}
    </div>
  );
}

export default Input;
