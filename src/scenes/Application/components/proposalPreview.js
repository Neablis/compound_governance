import React, { Component } from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core/";

import * as actions from "../services/actions";

class ProposalPreview extends Component {
    constructor(props) {
        super(props);

        this.proposalId = props.id;
    }

    render() {
        if (this.props.proposals.length === 0) {
            return null;
        }

        const proposal = this.props.proposals.find((element) => element.id === this.proposalId);

        console.log(proposal)
        return (
            <Box>
                {
                    this.proposalId
                }
            </Box>
        );
    }
}

function mapStateToProps(state) {
    return {
        proposals: state.ApplicationReducer.proposals,
    };
}

export default connect(mapStateToProps, actions)(ProposalPreview);
