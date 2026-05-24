const checkValidData = (email, password, name) => {
  const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /^[a-zA-Z\s]{2,50}$/.test(name);
  if (name !== undefined && !isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export default checkValidData;
