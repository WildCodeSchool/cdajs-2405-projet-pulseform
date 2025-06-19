import blobHomePage from "@assets/blobs/blob_homePage.svg";
import DoubleScreenLayout from "@components/atoms/Layout/DoubleScreenLayout";
import MobileBodyLayout from "@components/atoms/Layout/MobileBodyLayout";
import { useHomeMobileView } from "@context/MobileHomeViewContext";
import { useEffect, useState } from "react";
import { HomePageView, UserProfileView } from "./Views";
import "./HomePage.scss";
import MenuBurgerIcon from "@components/atoms/MenuBurgerIcon";
import MenuBurger from "@components/molecules/MenuBurger";
import MenuListItems from "@components/molecules/MenuListItems";

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const { homeMobileview } = useHomeMobileView();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <section className={isDesktop ? "desktop" : "mobile"}>
        {isDesktop ? (
          <>

            <div className="blob-wrapper">
              <img
                className="desktop__blob"
                src={blobHomePage}
                alt="blob"
                aria-hidden="true"
              />
            </div>
            <MenuBurgerIcon
              className="desktop__menuBurgerIcon"
              color="white"
              fontSize={40}
              onClick={onMenu}
            />

            {isMenuOpen && (
              <MenuBurger isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
                <MenuListItems />
              </MenuBurger>
            )}

            <DoubleScreenLayout>
              <UserProfileView isDesktop={isDesktop} />
              {/* Left column with user profile */}
              <HomePageView isDesktop={isDesktop} />
              {/* Right column with the list of programs */}
            </DoubleScreenLayout>
          </>
        ) : (
          <MobileBodyLayout>
            {homeMobileview === "home" ? (
              <HomePageView isDesktop={isDesktop} />
            ) : (
              <UserProfileView isDesktop={isDesktop} />
            )}
          </MobileBodyLayout>
        )}
      </section>
    </>
  );
};

export default HomePage;
