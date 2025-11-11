import {
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { navigationLinks } from "./header";

export function NavigationMenuComponent() {
  return (
    <NavigationMenu className="max-md:hidden">
      <NavigationMenuList className="gap-2">
        {navigationLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={link.href}
                className="flex-row items-center gap-2 py-1.5 font-medium text-foreground hover:text-primary"
              >
                <Icon size={16} className="text-[#6FB6E2]" aria-hidden="true" />
                <span>{link.label}</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
