import { Component, Input } from "@angular/core";
import { MemberEntity } from "../models/member.model";

@Component({
  selector: "[app-member-item]",
  templateUrl: "./member-item.component.html",
  styleUrls: ["./member-item.component.scss"],
})
export class MemberItemComponent {
  @Input() member: MemberEntity;
}
