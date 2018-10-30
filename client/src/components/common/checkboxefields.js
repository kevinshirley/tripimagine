import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  icon,
  id,
  htmlFor
}) => {
  return (
    <div className="input-wrapper form-group">
      <div className="inner-wrap">
        <label htmlFor={htmlFor} ><i className="material-icons">{icon}</i> {label}</label>
        <div className="input-container">
          <input 
            type={type} className={classnames('form-control', {
              'trip-is-invalid': error
            })} 
            name={name} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            id={id}
            disabled={disabled}
          />
          {info && <small className="form-text text-muted">{info}</small>}
          {error && (
            <small className="trip-invalid-feedback">{error}</small>
          )}
        </div>
      </div>
    </div>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;