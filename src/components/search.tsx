"use client";

import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { search, main_data } from "@/data";

export function Search({
  open,
  setOpen,
  setIpc,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIpc: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search for documents..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {search(query).map((key: string) => {
            // @ts-ignore
            const item = main_data[key];
            return (
              <CommandItem
                key={key}
                onSelect={(e) => {
                  setIpc(key);
                  setOpen(false);
                }}
              >
                <div className=" text-black font-mono font-semibold mr-2">
                  IPC: {key}
                </div>
                <div className="text-gray-900 items-start">
                  -{" "}
                  {item.title.length > 60
                    ? item.title.substring(0, 60) + "..."
                    : item.title}
                </div>
              </CommandItem>
            );
          })}
          {/* <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FaceIcon className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <RocketIcon className="mr-2 h-4 w-4" />
            <span>Launch</span>
          </CommandItem> */}
        </CommandList>
      </CommandDialog>
    </>
  );
}
