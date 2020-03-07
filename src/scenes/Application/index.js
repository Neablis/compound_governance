import React, { Component } from "react";
import { connect } from "react-redux";

import ProposalPreview from "./components/proposalPreview";

import * as actions from "./services/actions";

class Portal extends Component {
    componentDidMount() {
        this.props.getProposals();
        this.props.getVoteReceipts();
        this.props.getAccounts();

    }

    render() {
        const proposals = this.props.application.proposals;

        if (proposals.length === 0) {
            return null;
        }

        return (
            <div>
                <h1>
                    Hello
                </h1>
                <span>
                    {
                        proposals.map((proposal) =>
                               <ProposalPreview
                                   id={proposal.id}
                                   key={proposal.id}
                               />
                        )
                    }
                </span>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        application: state.ApplicationReducer,
    };
}

export default connect(mapStateToProps, actions)(Portal);
