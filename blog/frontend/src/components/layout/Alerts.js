import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props
        if (error !== prevProps.error){
            if (error.msg.title)
                alert.error("A title is required!");
            if (error.msg.author)
                alert.error("An author is required!");
            if (error.msg.content)
                alert.error("Content is required!");
        }

        if (message !== prevProps.message) {
            if (message.postDeleted)
                alert.success(message.postDeleted);
            if (message.postAdded)
                alert.success(message.postAdded);
        }
    }

    render() {
        return <Fragment />;
    }
}


const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));

//export default (withAlert()(Alerts));
