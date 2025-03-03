import { useTranslation } from "react-i18next";

import ErrorBodyPage from "@components/organismes/ErrorBodyPage";

import blob404 from "@assets/images/blob-girl-404.svg";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <ErrorBodyPage
      picture={blob404}
      altPicture={"blob404"}
      textError={t("PAGE_NOT_FOUND")}
    />
  );
}

export default NotFoundPage;
