import { Component, OnInit } from "@angular/core";
import { MemberEntity } from "../models/member.model";
import { MembersApiService } from "../members-api.service";

@Component({
  selector: "app-members-list",
  templateUrl: "./members-list.component.html",
  styleUrls: ["./members-list.component.scss"],
})
export class MembersListComponent implements OnInit {
  members: MemberEntity[];
  organizationName = "";

  constructor(private membersApi: MembersApiService) {
    this.organizationName = "angular";
  }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.membersApi.getAllMembers(this.organizationName).subscribe(
      (ms) => (this.members = ms),
      (error) => console.log(error)
    );
  }
}
