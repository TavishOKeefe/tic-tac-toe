import React from 'react';
import PropTypes from 'prop-types';

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.number
};

export default Square;
