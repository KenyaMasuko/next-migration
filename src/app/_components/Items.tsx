"use client";

import { useCallback, useRef, useEffect, useState } from "react";

type Item = {
  userName: string;
};

type Props = {
  initialItems: Item[];
  lastId: number;
};

async function fetchItems(lastId: number) {
  const res = await fetch(
    `http://localhost:3080/posts/follows?lastId=${lastId}`
  );
  return res.json();
}

export function Items({ initialItems, lastId }: Props) {
  console.log("initialItems", initialItems);
  const observerTarget = useRef(null);

  const [items, setItems] = useState([initialItems]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(lastId);

  const flatItems = items.flatMap((id) => id);

  const loadMore = useCallback(async (page: number) => {
    const data = await fetchItems(page);
    setItems((prev) => [...prev, data]);
    setPage(data[data.length - 1].id);

    const count = data.length;
    setHasMore(count > 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasMore) {
          }
        });
      },
      { threshold: 1.0 }
    );

    let observerRefValue: null = null;

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
      observerRefValue = observerTarget.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [hasMore, observerTarget]);

  useEffect(() => {
    if (page > 0) loadMore(page);
  }, [page, loadMore]);

  return (
    <div>
      {flatItems.map((item) => (
        <div key={item.id}>{item.userName}</div>
      ))}
      <div ref={observerTarget}>{hasMore && <div>Loading ...</div>}</div>
    </div>
  );
}
