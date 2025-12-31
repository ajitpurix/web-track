"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useRef } from "react";

export default function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();

  // Prevent multiple API calls per user
  const createdUserId = useRef<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !user) return;

    if (createdUserId.current === user.id) return;

    createdUserId.current = user.id;
    createNewUser();
  }, [user, isLoaded]);

  const createNewUser = async () => {
    try {
      await axios.post("/api/user");
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return <>{children}</>;
}
