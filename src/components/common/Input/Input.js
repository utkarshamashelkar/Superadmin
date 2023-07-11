import React from 'react'
import "./input.scss"

const Input = ({ label,type, value, onChange,placeholder, inputError }) => {
  return (
    <div className="form-group">
    <label>{label} *</label>
    <input
      type={type}
      className="input-field"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {inputError && <div className="error">{inputError}</div>}
  </div>
  )
}

export default Input