import * as React from "react";
import { SearchBox } from "app-common";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: (event: React.FormEvent<HTMLFormElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  value: string;
}

export const MemberSearch = (props: Props) => {
  return (
    <>
      <SearchBox
        label="Search Organization"
        onChange={props.onChange}
        onReset={props.onReset}
        onSubmit={props.onSubmit}
        placeholder="Start typing a name..."
        value={props.value}
      />
    </>
  );
};
