import * as React from "react";
import clsx from "clsx";

interface Props {
  children?: {};
  className?: string;
}

export const Container = (props: Props) => (
  <main className={clsx("container", props.className)}>{props.children}</main>
);
