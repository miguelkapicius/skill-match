import {
  BadgeAlertIcon,
  CircleQuestionMarkIcon,
  EarthIcon,
  HouseIcon,
  ProportionsIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b px-6 h-16">
      <div className="flex h-16 items-center justify-center gap-4 max-w-3xl px-4 mx-auto w-full">
        <div className="flex items-center">
          <a href="#" className="text-primary hover:text-primary/90">
            <img
              draggable="false"
              className="size-16"
              src="/logo-sm.svg"
              alt="SM"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
