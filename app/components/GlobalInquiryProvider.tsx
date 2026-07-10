"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import InquiryDrawer from "./InquiryDrawer";

type InquiryContextType = {
  openInquiry: () => void;
  closeInquiry: () => void;
};

const InquiryContext = createContext<InquiryContextType | null>(null);

export function useInquiry() {
  const context = useContext(InquiryContext);

  if (!context) {
    throw new Error(
      "useInquiry must be used inside GlobalInquiryProvider"
    );
  }

  return context;
}

export default function GlobalInquiryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  function openInquiry() {
    setOpen(true);
  }

  function closeInquiry() {
    setOpen(false);
  }

  return (
    <InquiryContext.Provider
      value={{
        openInquiry,
        closeInquiry,
      }}
    >
      {children}

      <InquiryDrawer
        open={open}
        onClose={closeInquiry}
      />
    </InquiryContext.Provider>
  );
}