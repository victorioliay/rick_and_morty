const validation = (userData) => {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!regexEmail.test(userData.email)) {
    errors.email = "El email ingresado no es válido";
  }

  if (!userData.email) {
    errors.email = "Ingrese un email";
  }

  if (userData.email.length > 35) {
    errors.email = "el email no puede superar los 35 caracteres";
  }

  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "el password debe contener al menos un numero";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "el password debe tener entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
