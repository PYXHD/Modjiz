"use client";

import { initializeRealMode } from "@/domain/session/initializeRealMode";

import Button from "@/components/ui/button/Button";

function RealAppButton() {
  const handleClick = () => {
    initializeRealMode();

    window.location.href = "/auth";
  };

  return <Button onClick={handleClick}>Vraies données</Button>;
}

export default RealAppButton;
