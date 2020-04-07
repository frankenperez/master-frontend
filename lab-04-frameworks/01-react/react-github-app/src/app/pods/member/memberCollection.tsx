import * as React from "react";
import { MemberEntity, UserEntity } from "./member.model";
import { gitHubAPI } from "./member.api";
import { MemberList, MemberSearch } from "app-pods";

export const MemberListContainer = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [user, setUser] = React.useState<UserEntity>();
  const [organizationName, setOrganizationName] = React.useState("reactjs");

  // Member and User Fetching
  const loadMembersFromAPI = (organizationName: string) => {
    if (organizationName.length > 0) {
      setLoading(true);
      gitHubAPI.getMembersByOrganization(organizationName).then((response) => {
        setMembers(response);
        setLoading(false);
      });
    }
  };

  const loadUserFromAPI = (userName: string) => {
    if (userName.length > 0) {
      gitHubAPI.getUserByName(userName).then((response) => {
        setUser(response);
      });
    }
  };

  // Handling Search Form Actions
  const changeOrganizationName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOrganizationName(e.target.value);

  const resetOrganizationName = (e: React.FormEvent<HTMLFormElement>) => {
    setOrganizationName("");
    setMembers([]);
  };

  const submitOrganizationName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadMembersFromAPI(organizationName);
  };

  // Handling List Detail
  const clearUser = () => setUser(null);

  return (
    <>
      <MemberSearch
        onChange={changeOrganizationName}
        onReset={resetOrganizationName}
        onSubmit={submitOrganizationName}
        value={organizationName}
      />
      <MemberList
        clearUser={clearUser}
        loading={loading}
        loadMembersByOrganization={loadMembersFromAPI}
        loadUserByName={loadUserFromAPI}
        members={members}
        user={user}
      />
    </>
  );
};
