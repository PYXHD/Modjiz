"use client";

import { initializeMockMode } from "@/domain/session/initializeMockMode";

import Button from "@/components/ui/button/Button";

function StartDemoButton() {
  const handleClick = () => {
    initializeMockMode();

    window.location.href = "/app";
  };

  return <Button onClick={handleClick}>Découvrir Modjiz</Button>;
}

export default StartDemoButton;
