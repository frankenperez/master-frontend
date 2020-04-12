import * as React from "react";
import { UserEntity } from "./member.model";
import { Modal } from "app-common";
import IconCompany from "app-icons/company-icon.svg";
import IconFollowers from "app-icons/followers-icon.svg";
import IconLocation from "app-icons/location-icon.svg";
import IconRepos from "app-icons/repos-icon.svg";

interface Props {
  clearUser: () => void;
  user: UserEntity;
}

export const MemberListDetail = (props: Props) => {
  return (
    <Modal
      className="list-detail"
      title={props.user.login}
      onClose={props.clearUser}
    >
      <section className="list-detail__meta">
        <div className="list-detail__avatar">
          <img src={props.user.avatar_url} alt={`${props.user.login} avatar`} />
        </div>
        {props.user.company && (
          <p className="list-detail__info">
            <IconCompany className="list-detail__icon" /> {props.user.company}
          </p>
        )}
        {props.user.location && (
          <p className="list-detail__info">
            <IconLocation className="list-detail__icon" /> {props.user.location}
          </p>
        )}
      </section>
      <section className="list-detail__content">
        <p className="list-detail__bio">{props.user.bio}</p>
        <div className="list-details__profile">
          <div className="list-detail__info">
            <IconRepos className="list-detail__icon" />{" "}
            {props.user.public_repos} Public Repositories
          </div>
          <div className="list-detail__info">
            <IconFollowers className="list-detail__icon" />{" "}
            {props.user.followers} Followers
          </div>
        </div>
        <div className="list-detail__link">
          {props.user.blog && (
            <p>
              <a
                href={props.user.blog}
                rel="noopener noreferrer"
                target="_blank"
                title="Go to User Blog"
              >
                Visit User Blog
              </a>
            </p>
          )}
        </div>
      </section>
    </Modal>
  );
};
