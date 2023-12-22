import axios from "axios";

export const login = async (values: any) => {
  console.log("Login: ", `${process.env.NEXT_PUBLIC_AUTISM_API_URL}/login`);
  return await axios.post(
    `${process.env.NEXT_PUBLIC_AUTISM_API_URL}/login`,
    values
  );
};
