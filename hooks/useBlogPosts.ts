"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export type DevToPost = {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  published_at: string;
  url: string;
};

export function useBlogPosts() {
  const [posts, setPosts] = useState<DevToPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<DevToPost[]>("/api/devto", {
        signal: controller.signal,
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return {
    posts,
    loading,
    error,
  };
}
