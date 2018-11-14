import React from 'react';
import PropTypes from 'prop-types';

export const Cell = ({large, small, children, className}) => (
  <td className={'table-cell' + (className ? ' ' + className : '') + (large ? ' large' : '') + (small ? ' small' : '')}>
      {children}
  </td>
);

export const HeadCell = ({large, small, children, className}) => (
  <th className={'table-head-cell' + (className ? ' ' + className : '') + (large ? ' large' : '') + (small ? ' small' : '')}>
      {children}
  </th>
);

// export const Header = ({children, className}) => (
//   <div className={'table-row-head ' + className}>
//       {children}
//   </div>
// );

// export const Body = ({children, className}) => (
//   <div className={'table-row-container ' + className}>
//       {children}
//   </div>
// );

export const Row = ({children, className, onClick}) => (
  <tr onClick={onClick} className={'table-row ' + className}>
      {children}
  </tr>
);

export const HeadRow = ({children, className, onClick}) => (
  <tr onClick={onClick} className={'table-head-row ' + className}>
      {children}
  </tr>
);

export const Table = ({children, className}) => (
  <table className={'table ' + className}>
      {children}
  </table>
);

Table.defaultProps = {
  className: ''
};

Row.defaultProps = {
  className: ''
};

Cell.defaultProps = {
  className: ''
};

// Body.defaultProps = {
//   className: ''
// };

// Header.defaultProps = {
//   className: ''
// };

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func
};

Cell.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.any,
  dangerouslySetInnerHTML: PropTypes.any
};

// Body.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.any
// };

// Header.propTypes = {
//   children: PropTypes.any,
//   className: PropTypes.string
// };