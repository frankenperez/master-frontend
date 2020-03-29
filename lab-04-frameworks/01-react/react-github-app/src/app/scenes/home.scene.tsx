import * as React from "react";
import { Container, Header, Footer } from "app-layout";
import { MemberList, MemberSearch } from "app-pods";

export const HomePage = () => (
  <>
    <Header />
    <Container className="content-wrapper">
      <MemberSearch />
      <MemberList />
    </Container>
    <Footer />
  </>
);
