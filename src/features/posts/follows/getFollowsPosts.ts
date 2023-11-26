import { baseApiUrl } from "@/constants";

export const getFollowsPosts = async (lastId?: number) => {
  const url =
    lastId == null ? `posts/follows` : `posts/follows?lastId=${lastId}`;
  const res = await fetch(`${baseApiUrl}/${url}`);
  return res.json();
};
