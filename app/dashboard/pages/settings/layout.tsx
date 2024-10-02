import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./sidebar-nav";
import { generateMeta } from "@/lib/utils";

export async function generateMetadata() {
  return generateMeta({
    title: "Settings Page",
    description:
      "Example of settings page and form created using react-hook-form and Zod validator. Built with Tailwind CSS and React.",
    canonical: "/pages/settings"
  });
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/dashboard/pages/settings"
  },
  {
    title: "Account",
    href: "#"
  },
  {
    title: "Appearance",
    href: "#"
  },
  {
    title: "Notifications",
    href: "#"
  },
  {
    title: "Display",
    href: "#"
  }
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </>
  );
}
