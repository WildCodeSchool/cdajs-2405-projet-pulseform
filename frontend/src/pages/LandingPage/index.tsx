import { useTranslation } from "react-i18next";

import LittleLogo from "@components/atoms/LittleLogo";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <section>
      <div>
        <div>
          <div>
            <LittleLogo />
          </div>
          <p>{t("CONNECT_MY")}</p>
        </div>
        <p>{t("LANDING_DESCRIPTION")}</p>
        <div>{/* <BasicButton>{t("CREATE_ACCOUNT")}</BasicButton> */}</div>
      </div>
      <div>
        <p>{t("LANDING_DESCRIPTION_2")}</p>
        <div>
          <p>{t("PROGRAMS_TO_DICOVER")}</p>
          <p>{t("FOLLOW_YOUR_PROGRESS")}</p>
          <p>{t("PERSONALIZED_COACHING")}</p>
        </div>
        <div>{/* <BasicButton>{t("TEST_PROGRAM")}</BasicButton> */}</div>
      </div>
    </section>
  );
}

export default LandingPage;
