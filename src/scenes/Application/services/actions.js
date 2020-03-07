import axios from "axios";
import config from "../../../services/config";

import {
    SET_ACCOUNTS,
    SET_PROPOSALS, SET_RECEIPTS
} from "./reducer";

export const getProposals = () => {
    return async (dispatch, getState) => {
        let network = getState().ApplicationReducer.network;

        const { data } = await axios({
            url: `${config.API_URL}/api/v2/governance/proposals?network=${network}`,
            method: "get",
            data: {}
        });

        if (data.error) {
            console.error(data.error);
        } else {
            dispatch({
                type: SET_PROPOSALS,
                proposals: data.proposals
            });
        }
    };
};

export const getVoteReceipts = () => {
    return async (dispatch, getState) => {
        let network = getState().ApplicationReducer.network;

        const { data } = await axios({
            url: `${config.API_URL}/api/v2/governance/proposal_vote_receipts?network=${network}`,
            method: "get",
            data: {}
        });

        if (data.error) {
            console.error(data.error);
        } else {
            dispatch({
                type: SET_RECEIPTS,
                receipts: data.receipts
            });
        }
    };
};

export const getAccounts = () => {
    return async (dispatch, getState) => {
        let network = getState().ApplicationReducer.network;

        const { data } = await axios({
            url: `${config.API_URL}/api/v2/governance/accounts?network=${network}`,
            method: "get",
            data: {}
        });

        if (data.error) {
            console.error(data.error);
        } else {
            dispatch({
                type: SET_ACCOUNTS,
                accounts: data.accounts
            });
        }
    };
};