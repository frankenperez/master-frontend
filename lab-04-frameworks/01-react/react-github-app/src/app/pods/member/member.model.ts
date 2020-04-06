export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
}

export interface UserEntity extends MemberEntity {
  company: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
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
  repos_url: "",
  company: "",
  blog: "",
  location: "",
  bio: "",
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
});
