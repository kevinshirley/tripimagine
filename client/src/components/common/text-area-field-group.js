import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  htmlFor,
  label,
  iconClass,
  icon,
  id
}) => {
  return (
    <div className="input-wrapper form-group">
      <div className="inner-wrap">
        <label htmlFor={htmlFor} ><i className={iconClass}>{icon}</i> {label}</label>
        <div className="input-container">
          <textarea
            className={classnames('form-control', {
              'trip-is-invalid': error
            })}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            id={id}
          />
          {info && <small className="form-text text-muted">{info}</small>}
          {error && <small className="trip-invalid-feedback">{error}</small>}
        </div>
      </div>
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  iconClass: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
};

TextAreaFieldGroup.defaultProps = {
  iconClass: 'material-icons',
}

export default TextAreaFieldGroup;
