import config from "../../../services/config";

export const SET_PROPOSALS = "SET_PROPOSALS";
export const SET_RECEIPTS = "SET_RECEIPTS";
export const SET_ACCOUNTS = "SET_ACCOUNTS";

const initialState = {
    network: config.NETWORK,
    proposals: [],
    accounts: [],
    receipts: [],
};

const ApplicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROPOSALS:
            return Object.assign({}, state, {
                proposals: action.proposals
            });
        case SET_RECEIPTS:
            return Object.assign({}, state, {
                receipts: action.receipts
            });
        case SET_ACCOUNTS:
            return Object.assign({}, state, {
                accounts: action.accounts
            });
        default:
            return state;
    }
};

export default ApplicationReducer;
