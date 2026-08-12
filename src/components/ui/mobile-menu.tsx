import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { NAV_ELEMENTS } from "@/lib/constants";

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="sm:hidden">
        <Menu className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Navegación</DropdownMenuLabel>

          {NAV_ELEMENTS.map((element) => (
            <DropdownMenuItem
              render={<a href={element.href} />}
              key={element.href}
            >
              {element.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
