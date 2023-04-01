import React from "react";

import Hero from "@/components/overview/Hero";
import Services from "@/components/overview/Services";
import Galleries from "@/components/overview/Galleries";

export default function Overview() {
  return (
    <div>
      <Hero />
      <Services />
      <Galleries />
    </div>
  );
}
