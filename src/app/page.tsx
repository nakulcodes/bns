"use client";
import Image from "next/image";
import Link from "next/link";
import DotPattern from "@/components/magicui/dot-pattern";
import { Search } from "@/components/search";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Document from "@/components/document";
import { search, main_data } from "@/data";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [ipc, setIpc] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center px-10 py-2">
        <div className="font-bold">Nyay Sanhita</div>
        <div>
          <div className="text-[14px] border-[1px] bg-black text-white rounded-full px-3 py-1 flex">
            Feedback
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-5xl font-bold">Search. Learn. Debate.</div>
          <div className="text-xl  mt-2">Search for all legal documents</div>
          <Search open={open} setOpen={setOpen} setIpc={setIpc} />
          <div
            className="bg-[rgb(24,24,27)] mt-4 w-[80vw] md:w-[40vw] rounded-md text-white text-left py-4 px-4 font-light text-sm cursor-text flex justify-between"
            onClick={() => {
              setOpen(true);
            }}
          >
            <p>A search bar will go here</p>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ">
              <span className="text-xs">⌘</span>J
            </kbd>
          </div>
          <div className="flex justify-start mt-4 space-x-2">
            <div className="text-[10px] border-[1px] border-black rounded-full px-3 py-1  flex">
              <p>Section 143</p>
              <Image src="/arrowr.svg" width={15} height={15} alt="" />
            </div>
            <div className="text-[10px] border-[1px] border-black rounded-full px-3 py-1  flex">
              <p>Section 12</p>
              <Image src="/arrowr.svg" width={15} height={15} alt="" />
            </div>
          </div>
        </div>
      </div>
      {ipc && (
        <Document title={main_data[ipc].title} data={main_data[ipc].content} />
      )}

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] -z-10"
        )}
      />
    </div>
  );
}
