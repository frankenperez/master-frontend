import * as React from "react";
import { MemberEntity, UserEntity } from "./member.model";
import { gitHubAPI } from "./member.api";
import { MemberList, MemberSearch } from "app-pods";

export const MemberListContainer = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [user, setUser] = React.useState<UserEntity>();

  const clearUser = () => setUser(null);

  const loadMembersFromAPI = (organizationName: string) => {
    if (organizationName.length > 0) {
      gitHubAPI.getMembersByOrganization(organizationName).then((response) => {
        setMembers(response);
      });
    }
  };

  const loadMembersByOrganization = (organizationName: string) => {
    loadMembersFromAPI(organizationName);
  };

  const loadUserFromAPI = (userName: string) => {
    if (userName.length > 0) {
      gitHubAPI.getUserByName(userName).then((response) => {
        setUser(response);
      });
    }
  };

  const loadUserByName = (userName: string) => {
    loadUserFromAPI(userName);
  };

  return (
    <>
      <MemberSearch loadMembersByOrganization={loadMembersByOrganization} />
      <MemberList
        clearUser={clearUser}
        members={members}
        loadUserByName={loadUserByName}
        user={user}
      />
    </>
  );
};
