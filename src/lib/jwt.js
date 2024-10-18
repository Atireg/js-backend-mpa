import util from 'util';
import jsonwentoken from 'jsonwebtoken';

const verify = util.promisify(jsonwentoken.verify);
const sign = util.promisify(jsonwentoken.sign);
const decode = util.promisify(jsonwentoken.decode);

const jwt = {
    verify,
    sign,
    decode
};

export default jwt;