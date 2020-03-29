export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface APIResponse {
  pagesCount: number;
  members: MemberEntity[];
}

export const createDefaultMemberEntity = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  html_url: ""
});

export const createDefaultApiResponse = () => ({
  pagesCount: 0,
  members: []
});
