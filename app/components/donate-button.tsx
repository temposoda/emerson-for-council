import React from "react";
import Link from "next/link";

export const DonateButton = () => {
  return (
    <Link
      className="btn btn-lg btn-primary"
      href="https://secure.actblue.com/donate/emersonforcouncil"
    >
      Donate
    </Link>
  );
};
