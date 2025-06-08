import { Calendar, CreditCard, MapPin, Shield, Trash2, Truck } from "lucide-react";


export const skips = [
  {
    size: "6 Yard Skip",
    description: "Ideal for small renovations",
    capacity: "~60 Bin Bags",
    price: "£264",
    roadLegal: true,
    duration: "14 Days",
    image: "/images/5-yarder-skip.jpg",
  },
  {
    size: "10 Yard Skip",
    description: "Perfect for home clear-outs",
    capacity: "~100 Bin Bags",
    price: "£356",
    roadLegal: false,
    duration: "14 Days",
    image: "/images/5-yarder-skip.jpg",
  },
  {
    size: "20 Yard Roll-on Skip",
    description: "Heavy-duty commercial jobs",
    capacity: "~200 Bin Bags",
    price: "£802",
    roadLegal: false,
    duration: "14 Days",
    image: "/images/5-yarder-skip.jpg",
  },
];

export const steps = [
  { label: "Location", icon: MapPin },
  { label: "Waste Type", icon: Trash2 },
  { label: "Select Skip", icon: Truck },
  { label: "Permit", icon: Shield },
  { label: "Date", icon: Calendar },
  { label: "Payment", icon: CreditCard },
];