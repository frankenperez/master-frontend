import * as React from "react";
import { MemberEntity, UserEntity } from "./member.model";
import { MemberListItem } from "./memberListItem";
import { MemberListDetail } from "./memberListDetail";
import IconError from "app-icons/error-icon.svg";
import IconLoading from "app-icons/loading-icon.svg";
import IconWarning from "app-icons/warning-icon.svg";

interface Props {
  clearUser: () => void;
  error: boolean;
  final: boolean;
  loading: boolean;
  loadNextPage();
  loadUserByName(userName: string);
  members: MemberEntity[];
  user: UserEntity | null;
}

export const MemberList = (props: Props) => {
  // Implement infinite scrolling with intersection observer
  const endListRef = React.useRef(null);
  const scrollObserver = React.useCallback(
    (node) => {
      const intObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            // Fetch members for next page
            intObs.unobserve(node);
            props.loadNextPage();
          }
        });
      });
      intObs.observe(node);
    },
    [props.loadNextPage]
  );

  React.useEffect(() => {
    endListRef.current = document.querySelectorAll(".list__end");
    if (endListRef.current) {
      endListRef.current.forEach((childNode) => scrollObserver(childNode));
    }
  }, [scrollObserver, endListRef]);

  return (
    <>
      <section className="member-list">
        <header className="list__header">
          <h2 className="text-center">Organization Members</h2>
        </header>
        {props.error ? (
          <div className="list__message list__message--error">
            <IconError className="list__message__icon" />
            <p>
              <strong>An occurred while fetching data</strong>
            </p>
            <p>Please, try again later</p>
          </div>
        ) : (
          <>
            {props.members.length > 0 ? (
              <div className="list">
                {props.members.map((member: MemberEntity) => (
                  <MemberListItem
                    key={member.id}
                    member={member}
                    loadUserByName={props.loadUserByName}
                  />
                ))}
                {props.loading && (
                  <div className="list__loading">
                    <IconLoading className="list__loading__icon"/>
                    <p>Getting members...</p>
                  </div>
                )}
                {!props.final && (
                  <div className="list__end" ref={endListRef}></div>
                )}
              </div>
            ) : (
              <div className="list__message list__message--empty">
                <IconWarning className="list__message__icon" />
                <p>
                  <strong>No results were found</strong>
                </p>
                <p>Please, check your search criteria...</p>
              </div>
            )}
          </>
        )}
      </section>
      {props.user && (
        <MemberListDetail clearUser={props.clearUser} user={props.user} />
      )}
    </>
  );
};
