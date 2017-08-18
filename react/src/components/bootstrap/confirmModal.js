import React from "react";
export default  (props) => (
    <div className={"modal fade "} role="dialog" id="confirmModal"
         aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title pull-left">Confirm</h4>
                    <button type="button" className="close pull-right" aria-label="Close" onClick={props.closeConfirmModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {props.confirmModal.message}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger"  onClick={props.closeConfirmModal}>Cancel</button>
                    <button type="button" className="btn btn-success" onClick={props.confirmModal.onConfirm}>Confirm
                    </button>
                </div>
            </div>
        </div>
    </div>
)