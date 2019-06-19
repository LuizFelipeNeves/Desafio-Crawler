const cheerio = require("cheerio");
const rp = require("request-promise");

const base = "http://applicant-test.us-east-1.elasticbeanstalk.com/";

const jar = rp.jar();
const baseRequest = rp.defaults({
  jar,
  headers: {
    Connection: "keep-alive",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Referer: base,
    Origin: base
  }
});

const newToken = token => {
  replacements = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a"
  };
  for (var e = token.split(""), t = 0; t < e.length; t++)
    e[t] = replacements.hasOwnProperty(e[t]) ? replacements[e[t]] : e[t];
  return e.join("");
};

const getResult = html => {
  const $ = cheerio.load(html);
  return $("#answer").text();
};

const getToken = html => {
  const $ = cheerio.load(html);
  const temptoken = $("input[name=token]").attr("value");
  return newToken(temptoken);
};

const getNumber = async () => {
  // request 1, get token
  const data = await baseRequest(base);
  const token = await getToken(data);

  // request 2, get
  const data2 = await baseRequest({
    url: base,
    method: "POST",
    form: { token }
  });

  // result final
  const final = await getResult(data2);
  await console.log(final);
};

getNumber();
