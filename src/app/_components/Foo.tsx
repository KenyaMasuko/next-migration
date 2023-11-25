import { Items } from "@/app/_components/Items";
import { FC, useEffect, useState, Suspense } from "react";

type Props = {
  items: any;
};

export const Foo: FC<Props> = async ({ items }) => {
  return (
    <Suspense fallback={<div>ああああああ</div>}>
      <Items initialItems={items} lastId={items[items.length - 1].id} />;
    </Suspense>
  );
};
