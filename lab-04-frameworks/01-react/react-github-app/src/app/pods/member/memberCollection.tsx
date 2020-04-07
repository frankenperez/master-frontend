import * as React from "react";
import { MemberEntity, UserEntity } from "./member.model";
import { gitHubAPI } from "./member.api";
import { MemberList, MemberSearch } from "app-pods";

export const MemberListContainer = () => {
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organizationName, setOrganizationName] = React.useState("reactjs");
  const [page, setPage] = React.useState(1);
  const [user, setUser] = React.useState<UserEntity>();

  // Member and User Fetching
  const loadMembersFromAPI = (organizationName: string, page: number) => {
    if (organizationName.length > 0) {
      setLoading(true);
      gitHubAPI.getMembersByOrganization(organizationName, page).then(
        (response) => {
          setMembers(members.concat(response));
          setLoading(false);
          setError(false);
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
    }
  };

  const loadUserFromAPI = (userName: string) => {
    if (userName.length > 0) {
      gitHubAPI.getUserByName(userName).then((response) => {
        setUser(response);
      });
    }
  };

  // Members Pagination
  const loadNextPage = () => {
    loadMembersFromAPI(organizationName, page + 1);
    setPage(page + 1);
  };

  // Handling Search Form Actions
  const changeOrganizationName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOrganizationName(e.target.value);

  const resetOrganizationName = (e: React.FormEvent<HTMLFormElement>) => {
    setOrganizationName("");
    setMembers([]);
    setPage(1);
  };

  const submitOrganizationName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMembers([]);
    setPage(1);
    loadMembersFromAPI(organizationName, page);
  };

  // Handling List Detail
  const clearUser = () => setUser(null);

  // Fetching members on mount using the default organization name
  React.useEffect(() => {
    loadMembersFromAPI(organizationName, page);
  }, []);

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
        error={error}
        loading={loading}
        loadNextPage={loadNextPage}
        loadUserByName={loadUserFromAPI}
        members={members}
        user={user}
      />
    </>
  );
};
