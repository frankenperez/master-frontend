import * as React from "react";
import { MemberEntity } from "./member.model";
import IconUser from "app-icons/user-icon.svg";
import IconLink from "app-icons/link-icon.svg";

interface Props {
  loadUserByName(userName: string);
  member: MemberEntity;
}

export const MemberListItem = (props: Props) => {
  const handleUserClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.loadUserByName(props.member.login);
  };
  return (
    <div className="list-item">
      <div className="list-item__avatar">
        <a onClick={handleUserClick} title="View User Detail">
          <img
            src={props.member.avatar_url}
            alt={`${props.member.login} avatar`}
          />
        </a>
      </div>
      <div className="list-item__content">
        <h3 className="list-item__username">{props.member.login}</h3>
        <div className="list__buttons">
          <a onClick={handleUserClick} title="View User Detail">
            <IconUser className="list__icon" />
          </a>
          <a
            href={props.member.html_url}
            rel="noopener noreferrer"
            target="_blank"
            title="Go to GitHub User Page"
          >
            <IconLink className="list__icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
