import BasicButton from "@components/atoms/BasicButton";
import LittleLogo from "@components/atoms/LittleLogo";

import blobFirstView from "@assets/blobs/blob.svg";
import girldImage from "@assets/images/girl.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./FirstView.scss";

function FirstView() {
	const { t } = useTranslation();

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
					<div className="first-view__header__container__buttom">
						<BasicButton className="first-view__header__container__buttom__width">
							{t("CREATE_ACCOUNT")}
						</BasicButton>
					</div>
					<Link to="/login" className="first-view__header__container__connect">
						{t("CONNECT_MY")}
					</Link>
				</div>
			</div>
			<p className="first-view__description">{t("LANDING_DESCRIPTION")}</p>
			<div className="first-view__buttom">
				<BasicButton>{t("CREATE_ACCOUNT")}</BasicButton>
			</div>
			<div className="first-view__buttom-program">
				<BasicButton className="first-view__buttom-program__button">
					{t("TEST_PROGRAM")}
				</BasicButton>
			</div>
		</div>
	);
}

export default FirstView;
