import * as React from "react";
import { SearchBox } from "app-common";
import { MemberEntity } from "./member.model";

interface Props {
  loadMembersByOrganization(organizationName: string);
}

export const MemberSearch = (props: Props) => {
  const [organizationName, setOrganizationName] = React.useState("reactjs");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOrganizationName(e.target.value);

  const onReset = (e: React.FormEvent<HTMLFormElement>) => setOrganizationName("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.loadMembersByOrganization(organizationName);
  };

  return (
    <>
      <SearchBox
        label="Search an Organization"
        onChange={onChange}
        onReset={onReset}
        onSubmit={onSubmit}
        placeholder="Start typing a name..."
        value={organizationName}
      />
    </>
  );
};
