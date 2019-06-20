const rp = require("request-promise");

const jar = rp.jar();
const baseRequest = rp.defaults({
  jar,
  headers: {
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  }
});

const base = "http://applicant-test.us-east-1.elasticbeanstalk.com/";

const options = (token) => {
    return {
      url: base,
      method: "POST",
      form: { token },
      headers: {
        Referer: base,
        Origin: base
      }
    }
} 

const PrimReq = async () => await baseRequest(base);
const SecReq = async (token) => await baseRequest(options(token));

module.exports = { PrimReq, SecReq };