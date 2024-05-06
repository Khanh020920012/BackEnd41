import nodemailer from "nodemailer";
export const sendMail = (to, subject, text) => {
  let configMail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kquoc29200@gmail.com",
      pass: "vykx omjh qydb zduz",
    },
  });
  let infoMail = {
    from: "kquoc29200@gmail.com",
    to,
    subject,
    text,
  };
  return configMail.sendMail(infoMail, (error) => error);
};
