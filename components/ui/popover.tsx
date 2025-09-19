"use client";
import * as React from "react";

export function Popover({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  // Find trigger and content
  let trigger: React.ReactNode = null;
  let content: React.ReactNode = null;
  React.Children.forEach(children, (child: any) => {
    if (child && child.type && child.type.displayName === "PopoverTrigger") {
      trigger = React.cloneElement(child, { onClick: () => setOpen((o: boolean) => !o) });
    } else if (child && child.type && child.type.displayName === "PopoverContent") {
      content = open ? child : null;
    }
  });
  return <div className="relative inline-block">{trigger}{content}</div>;
}

export function PopoverTrigger({ asChild, children, onClick }: { asChild?: boolean; children: React.ReactNode; onClick?: () => void }) {
  // Add onClick to children
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick });
  }
  return <span onClick={onClick}>{children}</span>;
}
PopoverTrigger.displayName = "PopoverTrigger";

export function PopoverContent({ children, align = "end", className = "" }: { children: React.ReactNode; align?: string; className?: string }) {
  return (
    <div className={`absolute right-0 mt-2 z-50 rounded-md border bg-white shadow-lg p-4 ${className}`} style={{ minWidth: 200 }}>
      {children}
    </div>
  );
}
PopoverContent.displayName = "PopoverContent";
