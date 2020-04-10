import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

import { MemberItemComponent, MembersListComponent } from "./members-list";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  declarations: [MemberItemComponent, MembersListComponent],
  exports: [MembersListComponent],
})
export class MembersModule {}
