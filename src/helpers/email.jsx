import emailjs from "@emailjs/browser";

const sendEmail = (details) => {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAIL_USER_ID,
    blockHeadless: true,
    limitRate: { throttle: 10000 },
  });
  return emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      name: details.name,
      email: details.email,
      subject: details.subject,
      message: details.message,
    },
  );
};

export default { sendEmail };
