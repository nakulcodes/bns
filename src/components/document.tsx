import { Button } from "@/components/ui/button";
import { Fragment } from "react";

export default function Document({
  title = "Document Preview",
  data,
}: {
  title: string;
  data: string;
}) {
  const formatData = (data) => {
    return data.split("<br>").map((item, index) => {
      // Handling long sequences of <br> tags
      if (item.includes("********************************")) {
        return (
          <Fragment key={index}>
            <div className="separator">********************************</div>
            <div>{item.replace("********************************", "")}</div>
          </Fragment>
        );
      }
      // Regular line break
      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: item.trim() }} />
      );
    });
  };
  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          {/* <Button variant="ghost" size="icon">
            <ArrowLeftIcon className="w-5 h-5" />
          </Button> */}
          <div className="text-lg font-medium">{title}</div>
        </div>
        {/* <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ZoomInIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ZoomOutIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoveHorizontalIcon className="w-5 h-5" />
          </Button>
        </div> */}
      </div>
      <div className="flex-1 overflow-auto p-6">
        <div className="prose text-md max-w-none">{formatData(data)}</div>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ZoomInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  );
}

function ZoomOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  );
}
