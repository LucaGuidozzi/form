function Checkbox({ reg, text, info, error, errorMsg, rules = {} }) {
  return (
    <div className="form-field-container">
      <input type="checkbox" {...reg(info, rules)} /> {text}
      {error && <p style={{ color: "red", fontSize: "14px" }}>{errorMsg}</p>}
    </div>
  );
}

export default Checkbox;
