const HTTP_STATUS_OK = 200;
const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_UNAUTHORIZED = 401;
const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_CONFLICT = 409;
const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

const validateDisplayName = (displayName) => {
  const verifydisplayName = displayName.length < 8;
  if (!displayName || verifydisplayName) {
    const e = JSON.stringify({
      code: HTTP_STATUS_BAD_REQUEST,
      message: '"displayName" length must be at least 8 characters long',
    });
    throw new Error(e);
  }
};

const validateEmail = (email) => {
  if (!email) {
    const e = JSON.stringify({
      code: HTTP_STATUS_BAD_REQUEST,
      message: '"email" must be a valid email',
    });
    throw new Error(e);
  }
  const verifyEmail = email.includes('@') && email.includes('.com');
  if (!verifyEmail) {
    const e = JSON.stringify({
      code: HTTP_STATUS_BAD_REQUEST,
      message: '"email" must be a valid email',
    });
    throw new Error(e);
  }
};

const validatePassword = (password) => {
  if (!password || password.length < 6) {
    const e = JSON.stringify({
      code: HTTP_STATUS_BAD_REQUEST,
      message: '"password" length must be at least 6 characters long',
    });
    throw new Error(e);
  }
};

const validateName = (name) => {
  if (!name) {
    const e = JSON.stringify({
      code: HTTP_STATUS_BAD_REQUEST,
      message: '"name" is required',
    });
    throw new Error(e);
  }
};

const validateLogin = (email, password) => {
  if (!email || !password) {
    const e = JSON.stringify({
      code: HTTP_STATUS_BAD_REQUEST,
      message: 'Some required fields are missing',
    });
    throw new Error(e);
  }
};

const validateUser = (displayName, email, password) => {
  validateDisplayName(displayName);
  validateEmail(email);
  validatePassword(password);
};

const validateCategory = (name) => {
  validateName(name);
};

const validatePost = (title, content, categoryIds) => {
  const verify = [title, content, categoryIds].filter((element) => !element || element === '');
  if (verify.length > 0) {
    const e = JSON.stringify({
      code: HTTP_STATUS_BAD_REQUEST,
      message: 'Some required fields are missing',
    });
    throw new Error(e);
  }
};

module.exports = {
  HTTP_STATUS_OK,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_CONFLICT,
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
  validateLogin,
  validateUser,
  validateCategory,
  validatePost,
};