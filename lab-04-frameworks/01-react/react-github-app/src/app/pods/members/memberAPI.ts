import { MemberEntity, createDefaultMemberEntity } from "./member";

class MemberAPI {
  // Just return a copy of the mock data
  getAllMembers(organizationName: string): Promise<MemberEntity[]> {
    const gitHubMembersUrl = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
      .then(response => this.checkStatus(response))
      .then(response => this.parseJSON(response))
      .then(data => this.resolveMembers(data));
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      const error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  private resolveMembers(data: any): Promise<MemberEntity[]> {
    const members = data.map(gitHubMember => {
      const member: MemberEntity = createDefaultMemberEntity();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatarUrl = gitHubMember.avataUrl;

      return member;
    });

    return Promise.resolve(members);
  }
}

export const memberAPI = new MemberAPI();
