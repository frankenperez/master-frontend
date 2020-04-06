import * as React from "react";
import { UserEntity } from "./member.model";
import IconUser from "app-icons/user-icon.svg";
import IconLink from "app-icons/link-icon.svg";

interface Props {
  user: UserEntity;
}

export const MemberListDetail = (props: Props) => {
  return (
    <div className="list-detail">
      <div className="list-detail__avatar">
        <img src={props.user.avatar_url} alt={`${props.user.login} avatar`} />
      </div>
      <div className="list-detail__content">
        <h3 className="list-detail__username">{props.user.login}</h3>
        <div className="list-detail__buttons">
          <a
            href={props.user.html_url}
            rel="noopener noreferrer"
            target="_blank"
            title="Go to GitHub User Page"
          >
            <IconLink className="list-detail__icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
