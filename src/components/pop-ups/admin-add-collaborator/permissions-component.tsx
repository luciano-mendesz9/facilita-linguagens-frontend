'use client';

import { USER_PERMISSIONS, USER_ROLES } from "@/src/constants";
import { useState } from "react";

export default function PermissionComponents() {
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const [selectedPermissions, setSelectedPermissions] = useState<Set<string>>(new Set());

    function handleSuperAdminToggle() {
        setIsSuperAdmin(prev => {
            const newState = !prev;
            if (newState) setSelectedPermissions(new Set());
            return newState;
        });
    }

    function togglePermission(permission: string) {
        if (isSuperAdmin) return;

        setSelectedPermissions(prev => {
            const newSet = new Set(prev);
            newSet.has(permission)
                ? newSet.delete(permission)
                : newSet.add(permission);
            return newSet;
        });
    }

    return (
        <div>
            {/* ROLE */}
            <select className="outline-blue-500 w-full p-3 border-2 border-gray-400 rounded-md mt-4">
                <option value="">Selecionar Cargo</option>
                {USER_ROLES.map(role => (
                    <option key={role} value={role}>{role}</option>
                ))}
            </select>

            {/* SUPER ADMIN */}
            <div className="flex items-center gap-3 mt-6">
                <input
                    type="checkbox"
                    id="isSuperAdmin"
                    checked={isSuperAdmin}
                    onChange={handleSuperAdminToggle}
                    className="w-5 h-5 accent-blue-500 cursor-pointer"
                />
                <label htmlFor="isSuperAdmin" className="font-medium cursor-pointer">Marcar como Super Admin</label>
            </div>

            {!isSuperAdmin ? (
                <>
                    <span className="block text-gray-700 mt-6 font-semibold">
                        Permissões do usuário:
                    </span>

                    <div className="grid grid-cols-3 gap-3 mt-3">

                        {USER_PERMISSIONS.map(permission => {

                            const selected = selectedPermissions.has(permission);

                            return (
                                <button
                                    key={permission}
                                    type="button"
                                    onClick={() => togglePermission(permission)}
                                    className={`
                                                        p-3 rounded-md border text-sm transition-all
                                                        ${selected
                                            ? 'border-blue-500 text-blue-500 bg-blue-500/30'
                                            : 'border-gray-400 text-gray-600 hover:bg-gray-200'}
                                                    `}>
                                    {permission}
                                </button>
                            )
                        })}

                    </div>
                </>
            ) : (
                <div className="mt-4 text-sm text-blue-600 bg-blue-500/20 p-4 rounded-md border border-blue-500">
                    Usuários Super Admin possuem todas as permissões possíveis no sistema.
                </div>
            )}
        </div>
    )
}