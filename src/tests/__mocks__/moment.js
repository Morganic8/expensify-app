//for dynamic values we need to create mock data

//cant import moment
//require.requireActual gets the real module not the mock module
const moment = require.requireActual('moment');
export default (timestamp = 0) => {
    return moment(timestamp);
};