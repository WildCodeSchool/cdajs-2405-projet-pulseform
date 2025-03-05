import { useTranslation } from "react-i18next";

import ErrorBodyPage from "@components/organismes/ErrorBodyPage";

import blob401 from "@assets/images/blob-girl-401.svg";

function AccessDeniedPage() {
  const { t } = useTranslation();

  return (
    <ErrorBodyPage
      picture={blob401}
      altPicture={"blob401"}
      textError={t("YOUR_DID_NOT_HAVE_ACCESS")}
    />
  );
}

export default AccessDeniedPage;
