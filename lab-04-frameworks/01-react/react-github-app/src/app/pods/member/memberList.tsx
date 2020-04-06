import * as React from "react";
import { MemberEntity, UserEntity } from "./member.model";
import { MemberListItem } from "./memberListItem";
import { MemberListDetail } from "./memberListDetail";

interface Props {
  loadUserByName(userName: string);
  members: MemberEntity[];
  user: UserEntity;
}

export const MemberList = (props: Props) => {
  return (
    <>
      <section className="member-list">
        <header className="list__header">
          <h2 className="text-center">Organization Members</h2>
        </header>
        {props.members.length > 0 ? (
          <div className="list">
            {props.members.map((member: MemberEntity) => (
              <MemberListItem
                key={member.id}
                member={member}
                loadUserByName={props.loadUserByName}
              />
            ))}
          </div>
        ) : (
          <div className="list__message">
            <p>
              <strong>No results were found</strong>
            </p>
            <p>Please, check your search criteria...</p>
          </div>
        )}
      </section>
      {props.user && <MemberListDetail user={props.user} />}
    </>
  );
};
