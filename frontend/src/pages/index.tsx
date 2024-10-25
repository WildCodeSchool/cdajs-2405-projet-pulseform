import { useTranslation } from "react-i18next";
import "./LoginPage.scss";

function LoginPage () {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="login-title">Prêt·e pour ta séance ?</h1>
      <form>
          <input aria-label="Veuillez entrer votre mail" type="email" id="email" name="email" placeholder={t('adresse mail')} required />
          <br/>
          <input aria-label="Veuillez entrer votre mot de passe" type="password" id="password" name="password" placeholder={t('mot de passe')} required />
          <br/>
        <button className="login-connect"type="submit">
         Me connecter
        </button>
      </form>

<section className="loginSection">
      <h2 className="motivationTitle">Motivé·e ?</h2>
      <button type="button">Créer un compte</button>
</section>
    </>
  )
}

export default LoginPage;
