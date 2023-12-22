"use server";

import axios from "axios";

type OfferList = {
  active: number;
  company: {};
  date_register: Date;
  description: string;
  end_date: Date;
  experience: number;
  id_category_job: number;
  id_company: number;
  id_company_center: null;
  id_contract: number;
  id_job: number;
  id_level_job: number;
  id_number_pay: number;
  id_presence: number;
  id_salary: number;
  id_salary_type: number;
  id_study: number;
  id_working_day: number;
  name: string;
  number_of_vacancies: string;
  presence: {};
  salary_not_show: number;
  type_of_contact: string;
};

interface OfferListResponse {
  current_page: number;
  data: OfferList[];
  first_page_url: string;
  from: number;
  last_page: number;
  per_page: number;
  total: number;
}

export const getOfferList = async () => {
  const { data } = await axios.get(`${process.env.AUTISM_API_URL}/jobs`, {
    headers: {
      Authorization: `Bearer ${process.env.AUTISM_TOKEN}`, // Replace 'yourToken' with your actual token
      "Content-Type": "application/json"
    }
  });

  return data;
};
