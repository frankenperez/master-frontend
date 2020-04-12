import * as React from "react";
import { UserEntity } from "./member.model";
import { gitHubAPI } from "./member.api";
import { MemberList, MemberSearch } from "app-pods";

export const MemberListContainer = () => {
  const [organizationName, setOrganizationName] = React.useState("reactjs");
  const [page, setPage] = React.useState(1);
  const [user, setUser] = React.useState<UserEntity>();

  // Member Reducer
  const memberReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_MEMBERS":
        if (page === 1 && action.members.length > 0) {
          return {
            ...state,
            error: false,
            final: false,
            loading: false,
            members: action.members,
          };
          break;
        } else if (page > 1 && action.members.length > 0) {
          return {
            ...state,
            error: false,
            final: false,
            loading: false,
            members: state.members.concat(action.members),
          };
          break;
        } else if (action.members.length === 0) {
          return {
            ...state,
            error: false,
            final: true,
            loading: false,
          };
          break;
        }
      case "LOADING":
        return {
          ...state,
          error: false,
          loading: true,
        };
        break;
      case "ERROR":
        return {
          ...state,
          error: true,
          loading: false,
        };
        break;
      case "CLEAR":
        return {
          error: false,
          final: false,
          loading: false,
          members: [],
        };
        break;
      default:
        return state;
    }
  };
  const [memberData, memberDispatch] = React.useReducer(memberReducer, {
    error: false,
    final: false,
    loading: false,
    members: [],
  });

  // Member Fetching
  const loadMembersFromAPI = (organizationName: string, page: number) => {
    if (organizationName.length > 0) {
      memberDispatch({
        type: "LOADING",
      });
      gitHubAPI.getMembersByOrganization(organizationName, page).then(
        (response) => {
          memberDispatch({
            type: "FETCH_MEMBERS",
            members: response,
          });
        },
        () => {
          memberDispatch({
            type: "ERROR",
          });
        }
      );
    }
  };

  // User Fetching
  const loadUserFromAPI = (userName: string) => {
    if (userName.length > 0) {
      gitHubAPI.getUserByName(userName).then((response) => {
        setUser(response);
      });
    }
  };

  // Members Pagination
  const loadNextPage = () => {
    if (!memberData.loading) {
      loadMembersFromAPI(organizationName, page + 1);
      setPage(page + 1);
    }
  };

  // Handling Search Form Actions
  const changeOrganizationName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOrganizationName(e.target.value);

  const resetOrganizationName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrganizationName("");
    setPage(1);
    memberDispatch({ type: "CLEAR" });
  };

  const submitOrganizationName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    memberDispatch({ type: "CLEAR" });
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
        error={memberData.error}
        final={memberData.final}
        loading={memberData.loading}
        loadNextPage={loadNextPage}
        loadUserByName={loadUserFromAPI}
        members={memberData.members}
        user={user}
      />
    </>
  );
};
