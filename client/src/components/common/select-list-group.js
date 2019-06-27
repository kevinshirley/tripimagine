import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SelectListGroup extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { name, value, error, info, onChange, options, id, label, icon, htmlFor, labelValue } = this.props;
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
              {options && options.map(option => {
                let content = (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                );
                return content;
              })}
            </select>
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="trip-invalid-feedback">{error}</div>}
          </div>
        </div>
      </div>
    );
  }

}

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
