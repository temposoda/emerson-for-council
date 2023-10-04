import React from "react";
import { LocaleSwitcher, getDictionary } from "../components";

export const VolunteerButton = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  return (
    <a className="btn btn-lg btn-secondary" href="/volunteer">
      {dictionary.components.VolunteerCTA}
    </a>
  );
};
