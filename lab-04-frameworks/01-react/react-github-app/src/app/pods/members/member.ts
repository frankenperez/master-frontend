export interface MemberEntity {
  id: number;
  login: string;
  avatarUrl: string;
}

export const createDefaultMemberEntity = () => ({
  id: -1,
  login: "",
  avatarUrl: ""
});
