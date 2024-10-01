"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("-->", error);
  }, [error]);

  return (
    <div className="flex min-h-[99vh] flex-col items-start gap-3 px-2 py-8">
      <div>
        <h2 className="text-5xl font-bold">Oops!</h2>
        <p className="text-muted-foreground">Something went wrong!</p>
      </div>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
