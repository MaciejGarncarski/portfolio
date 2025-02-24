import type { Redis } from "@upstash/redis";

type CheckViews = {
  viewKey: string;
  hasViewedCookie: boolean;
  redisClient: Redis;
};

export const checkIsViewed = async ({
  hasViewedCookie,
  redisClient,
  viewKey
}: CheckViews) => {
  const isDev = import.meta.env.NODE_ENV === "development";

  if (isDev || hasViewedCookie) {
    return true;
  }

  const hasViewed = await redisClient.get<boolean>(viewKey);

  return !!hasViewed;
};
