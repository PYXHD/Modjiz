"use client";

import Button from "@/components/ui/button/Button";

function RealAppButton() {
  const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

  const handleClick = () => {
    localStorage.setItem("app-mode", "real");
    document.cookie = `app-mode=real; max-age=${TEN_YEARS}; path=/`;
    document.cookie = `has-onboarded=true; max-age=${TEN_YEARS}; path=/`;
    window.location.href = "/auth";
  };

  return <Button onClick={handleClick}>Vraies données</Button>;
}

export default RealAppButton;
