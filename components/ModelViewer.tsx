"use client";

import { useEffect, useState } from "react";

export default function ModelViewer(props: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    import("@google/model-viewer").then(() => {
      setMounted(true);
    });
  }, []);

  // While loading on the server or client, we can return a fallback or null.
  if (!mounted) return null;

  const Viewer = "model-viewer" as any;
  return <Viewer {...props} />;
}
