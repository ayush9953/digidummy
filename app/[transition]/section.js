"use client";

import { useRef, useEffect } from "react";
import { useNavProvider } from "./nav-provider";
import { useInView } from "framer-motion";

export default function PageSection({
  section,component
}) {
  const ref = useRef(null);
  const { setActiveLink } = useNavProvider();

  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setActiveLink(section.slug);
    }
  }, [isInView]);

  return (
    <section
      id={section.slug}
      ref={ref}
      className="h-screen  flex justify-center items-center"
    >
      {component}
    </section>
  );
}