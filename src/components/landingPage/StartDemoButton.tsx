"use client";

import Button from "@/components/ui/button/Button";

function StartDemoButton() {
  const handleClick = () => {
    localStorage.setItem("app-mode", "mock");
    document.cookie = "app-mode=mock; path=/";
    document.cookie = "has-onboarded=true; max-age=31536000; path=/";
    window.location.href = "/app";
  };

  return <Button onClick={handleClick}>Version démo</Button>;
}

export default StartDemoButton;
