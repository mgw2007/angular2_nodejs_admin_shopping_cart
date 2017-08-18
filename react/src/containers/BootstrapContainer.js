import React, {Component, render} from "react";
import {connect} from "react-redux";
import Bootstrap from "../actions/bootstrapActions";
import Loader from "../components/bootstrap/loader";
import ConfirmModal from "../components/bootstrap/confirmModal";
class BootstrapContainer extends Component {
    componentDidUpdate() {
        const messages = this.props.bootstrap.flashMessages.map((message, i) => {
            $.notify(
                {message: message.message},
                {type: message.type, placement: {from: "top", align: "center"}}
            );
            this.props.dispatch(Bootstrap.removeFlashMessage(i));
        });
        if (this.props.bootstrap.confirmModal.open) {
            $('#confirmModal').modal('show');
        }
        else {
            $('#confirmModal').modal('hide');
        }
    }

    closeConfirmModal() {
        this.props.dispatch(Bootstrap.closeConfirmModal());
    }

    render() {
        return (
            <div>
                <Loader loader={this.props.bootstrap.showLoader}/>
                <ConfirmModal confirmModal={this.props.bootstrap.confirmModal}
                              closeConfirmModal={this.closeConfirmModal.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bootstrap: state.bootstrap
    };
};

export default connect(mapStateToProps)(BootstrapContainer);
