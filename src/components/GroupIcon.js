// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function GroupIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M10,12 C15,12 16,15 16,17 C16,18.1045695 15.1045695,19 14,19 L6,19 C4.9456382,19 4.08183488,18.1841222 4.00548574,17.1492623 L4,17 C4,15 5,12 10,12 Z M16,10 C19.3333333,10 20,12.1428571 20,13.5714286 C20,14.3604068 19.3604068,15 18.5714286,15 L16.7855946,15.0001739 C16.3733255,13.4319642 15.277523,11.8321851 12.7596553,11.2396507 C13.3427466,10.5306912 14.3411654,10 16,10 Z M10,4 L10.2218048,4.00428339 C12.5298439,4.09530598 13,5.62557903 13,7.5 C13,9.43299662 12,11 10,11 C8,11 7,9.43299662 7,7.5 C7,5.56700338 7.5,4 10,4 L10,4 Z M16,4 C17.6666667,4 18,5.11928813 18,6.5 C18,7.88071187 17.3333333,9 16,9 C14.6666667,9 14,7.88071187 14,6.5 C14,5.11928813 14.3333333,4 16,4 Z" />
    </Icon>
  );
}
