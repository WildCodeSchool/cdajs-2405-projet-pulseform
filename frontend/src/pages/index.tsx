import { useForm } from "react-hook-form";

import InputField from "../components/ImputField/ImputField";
import LittleLogo from "../components/atoms/LittleLogo";
import LoginImage from "../components/atoms/LoginImage";

import "./LoginPage.scss";
import blopLoginPage from "../assets/icons/blob/blob3.svg";

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form Data: ", data);
  };

  return (
    <>
      <LittleLogo size="desktop" hasLabel={true} />

      <img className="blob_login_page" src={blopLoginPage} alt="blob" />

      <section className="form_section">
        {/* Nouveau conteneur englobant */}
        <div className="test-program-container">
          <button type="button" className="test-program-button">
            Tester un programme
          </button>
        </div>

        <div className="image-side">
          <LoginImage size="desktop" />
        </div>

        <div className="bloc__desktop">
          <h1 className="login-title">Prêt·e pour ta séance ?</h1>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              name="email"
              type="email"
              placeholderKey="adresse mail"
              register={register}
              required
              ariaLabel="Veuillez entrer votre mail"
            />
            <InputField
              name="password"
              type="password"
              placeholderKey="mot de passe"
              register={register}
              required
              ariaLabel="Veuillez entrer votre mot de passe"
            />
            <button className="login-connect" type="submit">
              Me connecter
            </button>
          </form>

          <section className="loginSection">
            <div className="align__loginPage">
              <div className="motivation-block">
                <p className="motivationTitle">Motivé·e ?</p>
                <div className="primary-trait"></div>
              </div>
              <div className="create-account-block">
                <button className="created__button" type="button">
                  Créer un compte
                </button>
                <div className="secondary-trait"></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
