
import SidebarMember from "@members-components/sidebar";

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex w-full h-screen bg-gray-100">
            <SidebarMember />
            <div className="w-full max-w-425 pt-10 pr-5 pl-10 h-auto">
                {children}
            </div>
        </div>
    )
}