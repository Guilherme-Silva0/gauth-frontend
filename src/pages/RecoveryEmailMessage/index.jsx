import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";
import { Main, Text, Title } from "../../components";

const RecoveryEmail = () => {
  return (
    <Main>
      <img src="send-email-animate.svg" width={300} className="drop-shadow" />
      <div className="flex flex-col bg-gray-100 max-w-xl mx-5 py-8 px-10 rounded-xl shadow-lg dark:bg-fist">
        <Title additionalClass="text-center">Confirmation email</Title>
        <Text additionalClass="text-justify">
          I would like to inform you that a password recovery email has been
          sent to the address you provided. Please check your inbox as well as
          the spam folder to find the email from recovery.
        </Text>
        <div className="flex justify-center gap-3 mt-3">
          <a
            href="https://mail.google.com/"
            target="_blank"
            translate="no"
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-gray-200 rounded text-sm font-bold shadow transition-all hover:scale-110"
          >
            <SiGmail className="text-lg" /> Gmail
          </a>
          <a
            href="https://outlook.live.com/"
            target="_blank"
            translate="no"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded text-gray-200 text-sm font-bold shadow transition-all hover:scale-110"
          >
            <SiMicrosoftoutlook className="text-lg" /> Outlook
          </a>
        </div>
      </div>
    </Main>
  );
};

export default RecoveryEmail;
