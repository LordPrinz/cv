"use client";

import { useSearchParams } from "next/navigation";

const RodoParagraph = () => {
  const searchParams = useSearchParams();
  const companyName = searchParams.get("companyName") || "(nazwa firmy)";

  return (
    <p className="text-muted-foreground mx-auto hidden max-w-2xl break-inside-avoid pt-6 text-[9px] print:block print:max-w-none">
      Wyrażam zgodę na przetwarzanie moich danych osobowych przez {companyName}{" "}
      w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.
    </p>
  );
};

export default RodoParagraph;
