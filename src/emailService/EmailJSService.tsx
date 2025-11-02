import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface EmailParams {
  from_name: string;
  company_name: string;
  from_email: string;
  telephone_number: string;
  subject: string;
  message: string;
}

export const sendEmail = async (params: EmailParams): Promise<void> => {
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, params as any, PUBLIC_KEY);
    console.log("email successful");
  } catch (error) {
    console.log("Error sending email", error);
    throw error;
  }
};
