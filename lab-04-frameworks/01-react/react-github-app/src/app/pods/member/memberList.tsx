import * as React from "react";
import { MemberEntity } from "./member.model";
import { memberAPI } from "./member.api";
import { MemberListItem } from "./memberListItem";

export const MemberList = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const loadMembers = () => {
    memberAPI.getAllMembers("lemoncode").then(members => setMembers(members));
  };

  return (
    <section className="list">
      <header>
        <h2 className="text-center">Organization Members</h2>
      </header>
      <div>
        {members.map((member: MemberEntity) => (
          <MemberListItem key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};
