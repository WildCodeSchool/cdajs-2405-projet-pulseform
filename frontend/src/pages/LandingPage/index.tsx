import LittleLogo from "@components/atoms/LittleLogo";

function LandingPage() {
  return (
    <section>
      <div>
        <div>
          <div>
            <LittleLogo />
          </div>
          <p>Me Connecter</p>
        </div>
        <p>L’année dernière t’avais dit l’année prochaine</p>
        <div>{/* <BasicButton>Créer un conte</BasicButton> */}</div>
      </div>
      <div>
        <p>
          Que tu sois débutant·e ou expert·e, Pulse Form te guide à chaque étape
        </p>
        <div>
          <p>De nombreux programmes à découvrir</p>
          <p>Suis tes progression</p>
          <p>Un coaching personnalisé</p>
        </div>
        <div>{/* <BasicButton>Tester un programme</BasicButton> */}</div>
      </div>
    </section>
  );
}

export default LandingPage;
