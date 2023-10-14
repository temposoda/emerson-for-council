import React from "react";
import Link from "next/link";

export const VolunteerButton = () => {
  return (
    <Link className="btn btn-lg btn-secondary" href="/volunteer">
      Get Involved
    </Link>
  );
};
