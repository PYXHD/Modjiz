"use client";

import Button from "@/components/ui/button/Button";

function StartDemoButton() {
  const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

  const handleClick = () => {
    localStorage.setItem("app-mode", "mock");
    document.cookie = `app-mode=mock; max-age=${TEN_YEARS}; path=/`;
    document.cookie = `has-onboarded=true; max-age=${TEN_YEARS}; path=/`;
    window.location.href = "/app";
  };

  return <Button onClick={handleClick}>Version démo</Button>;
}

export default StartDemoButton;
