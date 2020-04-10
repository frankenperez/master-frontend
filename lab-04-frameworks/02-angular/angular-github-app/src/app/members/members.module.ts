import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

import {
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent,
} from "./members-table";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
  ],
  exports: [MembersTableComponent],
})
export class MembersModule {}
