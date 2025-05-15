import blobHomePage from "@assets/blobs/blob_homePage.svg";
import { useEffect, useState } from "react";

import DoubleScreenLayout from "@components/atoms/Layout/DoubleScreenLayout";
import MobileBodyLayout from "@components/atoms/Layout/MobileBodyLayout";
import { useHomeMobileView } from "@context/MobileHomeViewContext";
import { HomePageView, UserProfileView } from "./Views";

import { useUser } from "@context/UserContext";
import "./HomePage.scss";
import { MenuBurgerIcon } from "@utils/icon-list/iconList";
import MenuBurger from "@components/molecules/MenuBurger";
import MenuListItems from "@components/molecules/MenuListItems";

const HomePage = () => {
  const { homeMobileview } = useHomeMobileView();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  if (!user) return <p>User not found.</p>;

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
    setIsMenuOpen((prev) => !prev);
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
              <MenuBurger
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
              >
                <MenuListItems />
              </MenuBurger>
            )}

            <DoubleScreenLayout>
              <UserProfileView isDesktop={isDesktop} user={user} />
              {/* Left column with user profile */}
              <HomePageView isDesktop={isDesktop} user={user} />
              {/* Right column with the list of programs */}
            </DoubleScreenLayout>
          </>
        ) : (
          <MobileBodyLayout>
            {homeMobileview === "home" ? (
              <HomePageView isDesktop={isDesktop} user={user} />
            ) : (
              <UserProfileView isDesktop={isDesktop} user={user} />
            )}
          </MobileBodyLayout>
        )}
      </section>
    </>
  );
};

export default HomePage;
