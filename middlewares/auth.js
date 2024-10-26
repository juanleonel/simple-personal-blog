const USERNAME = 'admin';
const PASSWORD = '12345';

const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).send('Authenticate fail');
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');

  if (username === USERNAME && password === PASSWORD) {
    return next();
  } else {
    return res.status(401).send('incorrect credentials');
  }
};

module.exports = basicAuth;
