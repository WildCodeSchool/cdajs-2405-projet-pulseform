import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import BasicButton from "@components/atoms/BasicButton";
import LittleLogo from "@components/atoms/LittleLogo";

import { useUser } from "@context/UserContext";
import { LOGOUT_MUTATION } from "@graphql/mutations/user";

import blobFirstView from "@assets/blobs/blob.svg";
import girldImage from "@assets/images/girl.svg";
import "./FirstView.scss";

function FirstView() {
  const { t } = useTranslation();
  const { user } = useUser();
  const navigate = useNavigate();

  const [logout] = useMutation(LOGOUT_MUTATION, {
    refetchQueries: ["Me"],
    onCompleted: () => {
      navigate("/");
    },
  });

  return (
    <div className="first-view">
      <div className="first-view__blob">
        <img className="first-view__blob__img" src={blobFirstView} alt="blob" />
      </div>
      <div className="first-view__girl">
        <img className="first-view__girl__img" src={girldImage} alt="girl" />
      </div>
      <div className="first-view__header">
        <div className="first-view__header__logo-m">
          <LittleLogo hasLabel size="mobile" />
        </div>
        <div className="first-view__header__logo-d">
          <LittleLogo hasLabel />
        </div>
        <div className="first-view__header__container">
          {!user && (
            <div className="first-view__header__container__buttom">
              <Link
                to="/sign-up"
                className="first-view__header__container__buttom__width"
              >
                <BasicButton>{t("CREATE_ACCOUNT")}</BasicButton>
              </Link>
            </div>
          )}
          {user ? (
            <button
              type="button"
              onClick={() => logout()}
              className="first-view__header__container__logout"
            >
              {t("LOGOUT")}
            </button>
          ) : (
            <Link
              to="/login"
              className="first-view__header__container__connect"
            >
              {t("CONNECT_MY")}
            </Link>
          )}
        </div>
      </div>
      <p className="first-view__description">{t("LANDING_DESCRIPTION")}</p>
      {!user && (
        <div className="first-view__buttom">
          <Link to="/sign-up">
            <BasicButton>{t("CREATE_ACCOUNT")}</BasicButton>
          </Link>
        </div>
      )}
    </div>
  );
}

export default FirstView;
