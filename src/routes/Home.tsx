import React from "react";
import { useOktaAuth } from "okta-react-bug-fix";
import { Redirect } from "react-router-dom";
import Footer from "./footer";
import HomePageHeader from "./HomePageHeader";
import TopBodySegment from "./TopBodySegment";
import MiddleBodySegment from "./MiddleBodySegment";
import BottomBodySection from "./BottomBodySection";

function Home() {
  const { authState } = useOktaAuth();

  const HomePageBody = () => {
    return (
      <div>
        <TopBodySegment />
        <MiddleBodySegment />
        <BottomBodySection />
        <Footer />
      </div>
    );
  };

  return (
    <div>
      {!authState.isAuthenticated ? (
        <div>
          <HomePageHeader />
          <HomePageBody />
        </div>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </div>
  );
}

export default Home;
