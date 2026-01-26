import { PLATFORM_NAME } from "@/src/constants";

export default function TopbarAdmin() {
    return (
        <div className="flex sticky top-8 justify-between items-center" style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'saturate(120%) blur(6px)',
            WebkitBackdropFilter: 'saturate(120%) blur(6px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>
            {PLATFORM_NAME} (topo da tela)
            <span>usuário</span>
        </div>
    )
}