import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./AlreadyMemberBlock.scss";

const AlreadyMemberBlock = () => {
  const { t } = useTranslation();

  return (
    <section className="already-member" aria-label={t("ACCOUNT_ACTIONS")}>
      <div className="already-member__align">
        <div className="already-member__motivation-block">
          <p className="already-member__motivation-title">
            {t("ALREADY_HAVE_ACCOUNT")}
          </p>
          <div className="already-member__primary-trait" />
        </div>
        <div className="already-member__create-account-block">
          <Link
            to="/login"
            className="already-member__create-account-button"
            aria-label={t("GO_TO_LOGIN")}
          >
            {t("CONNECT")}
          </Link>
          <div className="already-member__secondary-trait" />
        </div>
      </div>
    </section>
  );
};

export default AlreadyMemberBlock;
