import React from "react";
import { LocaleSwitcher, getDictionary } from "../components";

export const DonateButton = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  return (
    <a
      className="btn btn-lg btn-primary"
      href="https://secure.actblue.com/donate/emersonforcouncil"
    >
      {dictionary.components.DontateCTA}
    </a>
  );
};
