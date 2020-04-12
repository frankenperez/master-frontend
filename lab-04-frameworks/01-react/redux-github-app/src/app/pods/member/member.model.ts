export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface UserEntity {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
}

export interface MemberAPIResponse {
  members: MemberEntity[];
}

export interface UserAPIResponse {
  user: UserEntity;
}

export const createDefaultMemberEntity = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  html_url: "",
  repos_url: "",
});

export const createDefaultUserEntity = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  html_url: "",
  company: "",
  blog: "",
  location: "",
  bio: "",
  public_repos: 0,
  followers: 0,
});
