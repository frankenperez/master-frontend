import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MembersModule } from "./members/members.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MembersModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
