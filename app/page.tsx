import Sidebar, { SidebarItem } from "@/components/Sidebar";
import {
  BarChart3,
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  LayoutDashboard,
  Settings,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div>
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
            <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" />
            <SidebarItem icon={<UserCircle size={20} />} text="Users" alert />
            <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
            <SidebarItem icon={<Package size={20} />} text="Orders" />
            <SidebarItem icon={<Receipt size={20} />} text="Billings" />
            <hr className="my-3" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          </Sidebar>
        </div>
      </div>
    </main>
  );
}
