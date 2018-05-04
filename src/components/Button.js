import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    handleClick(event) {
        event.preventDefault();

        this.props.onClick(this.props.id);
    }
    render() {
        return <div
            className={`button button_${this.props.id}`}
            onClick={this.handleClick.bind(this)}
        />
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Button;
