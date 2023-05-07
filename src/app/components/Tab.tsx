"use client";
import { Tab } from "@/types/Tab";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";

interface Props {
  tabs: Tab[];
}

export function Tab({ tabs }: Props) {
  return (
    <Tabs.Root defaultValue={tabs[0].title.toLocaleLowerCase()}>
      <Tabs.List className="flex gap-8">
        {tabs.map((tab, id) => (
          <Tabs.Trigger
            key={id}
            value={tab.title.toLowerCase()}
            className="text-white text-2xl font-bold mb-8 relative after:absolute after:top-8 after:left-0 after:h-[2px] 
            after:scale-0 data-[state=active]:after:scale-100 after:w-full after:bg-purple-500 after:bg-gradient-to-r 
            from-white to-purple-500 after:transition-transform after:duration-500 after:origin-left"
          >
            {tab.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab, id) => (
        <Tabs.Content key={id} value={tab.title.toLowerCase()}>
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
