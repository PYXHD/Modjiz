"use client";

import Button from "@/components/ui/button/Button";

function RealAppButton() {
  const handleClick = () => {
    localStorage.setItem("app-mode", "real");
    document.cookie = "app-mode=real; path=/";
    document.cookie = "has-onboarded=true; max-age=31536000; path=/";
    window.location.href = "/auth";
  };

  return <Button onClick={handleClick}>Vraies données</Button>;
}

export default RealAppButton;
