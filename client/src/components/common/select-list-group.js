import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({ name, value, error, info, onChange, options, id, label, icon, htmlFor, labelValue }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="input-wrapper form-group">
      <div className="inner-wrap">
        <label htmlFor={htmlFor} ><i className="material-icons">{icon}</i> {label}</label>
        <div className="input-container">
          <select
            className={classnames('form-control form-control-lg', {
              'trip-is-invalid': error
            })}
            name={name}
            value={value}
            onChange={onChange}
            id={id}
            label={labelValue}
          >
            {selectOptions}
          </select>
          {info && <small className="form-text text-muted">{info}</small>}
          {error && <div className="trip-invalid-feedback">{error}</div>}
        </div>
      </div>
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default SelectListGroup;
