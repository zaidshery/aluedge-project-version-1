import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="AluEdge home">
      <Image
        alt="AluEdge Fenestration Solutions"
        className="brand__logo"
        height={354}
        priority={priority}
        src="/images/optimized/aluedge-logo-820.png"
        width={1322}
      />
    </Link>
  );
}
