import type { Skip } from "@/types/types";
import skipImg from "/images/5-yarder-skip.jpg"; // Make sure this path is correct
import { AlertTriangle, ArrowRight, Check, Shield, Truck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { steps } from "@/constants/constants";

const getSkipImage = (skip: Skip) => {
  // Use local image for 5 yard, fallback to API image for others
  if (skip.name.includes("5 Yard")) return skipImg;
  return skip.image;
};

const SkipSelectorPage = () => {
  return (
    <div>Skip selector</div>
  )

};

export default SkipSelectorPage;
