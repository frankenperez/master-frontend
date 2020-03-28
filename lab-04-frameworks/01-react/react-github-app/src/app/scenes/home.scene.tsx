import * as React from "react";
import { Container, Header, Footer } from "app-layout";
import { MembersTableComponent } from "app-pods";
import { SearchForm } from "app-common";

export const HomePage = () => (
  <>
    <Header />
    <Container className="content-wrapper">
      <SearchForm />
      <MembersTableComponent />
    </Container>
    <Footer />
  </>
);
