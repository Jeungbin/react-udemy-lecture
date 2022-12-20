import { useState } from "react";
import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can i use React on a project?",
      content:
        "Yes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of course",
    },
    {
      id: 2,
      label: "Can i use Java on a project?",
      content:
        "Yes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of course",
    },
    {
      id: 3,
      label: "Can i use CSS on a project?",
      content:
        "Yes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of courseYes . of course",
    },
  ];

  return <Accordion items={items} />;
}
