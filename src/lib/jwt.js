import util from 'util';
import jsonwentoken from 'jsonwebtoken';

const verify = util.promisify(jsonwentoken.verify);
const sign = util.promisify(jsonwentoken.sign)

const jwt = {
    verify,
    sign
};

export default jwt;