import * as React from "react";
import { Container, Header, Footer } from "app-layout";
import { MemberListContainer } from "app-pods";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container className="content-wrapper">
        <MemberListContainer />
      </Container>
      <Footer />
    </>
  );
};
