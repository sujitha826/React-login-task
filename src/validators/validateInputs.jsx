export const validateEmail = (mail) => {
  // const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  return regex.test(mail) ? true : false;
};

export const validatePhone = (phone) => {
  return !isNaN(phone) && phone.length === 10 ? true : false;
};

export const validatePassword = (password) => {
  //const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const regex = /^[A-Za-z0-9 ]+$/;
  return regex.test(password) && password.length >= 8 ? true : false;
};
