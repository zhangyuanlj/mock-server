module.exports = (code, resBody, message) => {
  // return resBody;
  return {
    code: code,
    body: resBody,
    message: message
  };
};
