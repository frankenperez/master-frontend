import * as React from "react";
import { MemberEntity } from "./member.model";

export const MemberListItem = (props: { member: MemberEntity }) => (
  <tr>
    <td>
      <img src={props.member.avatar_url} style={{ maxWidth: "10rem" }} />
    </td>
    <td>
      <span>{props.member.id}</span>
    </td>
    <td>
      <span>{props.member.login}</span>
    </td>
  </tr>
);
