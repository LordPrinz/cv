"use client";

import { useSearchParams } from "next/navigation";

const RodoParagraph = () => {
  const searchParams = useSearchParams();
  const companyName = searchParams.get("companyName") || "(nazwa firmy)";

  return (
    <p className="absolute bottom-0  hidden max-w-sm self-end text-[10px] text-muted-foreground print:block">
      Wyrażam zgodę na przetwarzanie moich danych osobowych przez {companyName}{" "}
      w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.
    </p>
  );
};

export default RodoParagraph;
