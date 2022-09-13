import * as yup from "yup";

const userSchemaValidation = async (data) => {
  let schema = yup.object().shape({
    name: yup.string().required(),
    yearOld: yup.number().required().positive().integer(),
    email: yup.string().email(),
    gender: yup.string().required(),
  });

  try {
    const isValid = await schema.validate(data);
    return isValid;
  } catch (error) {
    console.log("error", error);
    return "invalid something";
  }
};

export default userSchemaValidation;
