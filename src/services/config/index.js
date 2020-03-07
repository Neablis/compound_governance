import development from "./development";
import staging from "./staging";
import production from "./production";

const configByEnvironment = {
    development,
    staging,
    production,
};

export const environment = process.env.REACT_APP_NODE_ENVIRONMENT || "development";

const config = configByEnvironment[environment];

export default {
    ...config,
};
