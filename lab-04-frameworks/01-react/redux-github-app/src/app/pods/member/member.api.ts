import {
  createDefaultMemberEntity,
  createDefaultUserEntity,
  MemberEntity,
  UserEntity,
} from "./member.model";

class GitHubAPI {
  getMembersByOrganization(
    organizationName: string,
    page = 1,
    perPage = 30
  ): Promise<MemberEntity[]> {
    let gitHubMembersUrl = `https://api.github.com/orgs/${organizationName}/members`;
    if (page > 0) {
      gitHubMembersUrl += `?page=${page}`;
    }
    if (perPage > 0) {
      gitHubMembersUrl += `&per_page=${perPage}`;
    }

    return fetch(gitHubMembersUrl)
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => this.resolveMembers(data));
  }

  getUserByName(userName: string): Promise<UserEntity> {
    const gitHubUserUrl = `https://api.github.com/users/${userName}`;
    return fetch(gitHubUserUrl)
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => this.resolveUser(data));
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
    const members = data.map((gitHubMember) => {
      const member: MemberEntity = createDefaultMemberEntity();
      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;
      member.html_url = gitHubMember.html_url;
      return member;
    });
    return Promise.resolve(members);
  }

  private resolveUser(data: any): Promise<UserEntity> {
    const user: UserEntity = createDefaultUserEntity();
    user.id = data.id;
    user.login = data.login;
    user.avatar_url = data.avatar_url;
    user.html_url = data.html_url;
    user.company = data.company;
    user.blog = data.blog;
    user.location = data.location;
    user.bio = data.bio;
    user.public_repos = data.public_repos;
    user.followers = data.followers;
    return Promise.resolve(user);
  }
}

export const gitHubAPI = new GitHubAPI();
