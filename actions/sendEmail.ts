"use server";

import React from "react";
import { Resend } from "resend";
import Contact from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resendApi = process.env.RESEND_API_KEY;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  //simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }
  if (!resendApi) {
    return { error: "Please provide a reswnd api key" };
  }
  const resend = new Resend(resendApi);

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sandro.bengoa@gmail.com",
      subject: "Message from Contact Form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail,
        message: message,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
