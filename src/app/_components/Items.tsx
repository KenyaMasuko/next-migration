"use client";

import { getFollowsPosts } from "@/features/posts/follows";
import { useCallback, useRef, useEffect, useState, FC } from "react";

type Item = {
  id: number;
  userName: string;
};

type Props = {
  initialItems: Item[];
  initialLastId: number;
};

export const Items: FC<Props> = ({ initialItems, initialLastId }) => {
  const observerTarget = useRef(null);

  const [items, setItems] = useState<Item[][]>([initialItems]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [lastId, setLastId] = useState<number>(initialLastId);

  const flatItems = items.flatMap((id) => id);

  const loadMore = useCallback(async () => {
    const data = await getFollowsPosts(lastId);
    setItems((prev) => [...prev, data]);
    setLastId(data[data.length - 1].id);

    const count = data.length;
    setHasMore(count > 0);
  }, [lastId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasMore) {
            loadMore();
          }
        });
      },
      { threshold: 1.0 },
    );

    let observerRefValue: null = null;

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
      observerRefValue = observerTarget.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [observerTarget, hasMore, loadMore, lastId]);

  return (
    <div>
      {flatItems.map((item) => (
        <div key={item.id}>{item.userName}</div>
      ))}
      <div ref={observerTarget}>{hasMore && <div>Loading ...</div>}</div>
    </div>
  );
};
