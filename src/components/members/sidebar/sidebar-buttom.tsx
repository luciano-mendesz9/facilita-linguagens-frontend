import { LucideIcon } from "lucide-react";

type Props = {
    title: string;
    bgColor?: string;
    textColor?: string;
    action?: () => void;

    styles?: string;
    disabled?: boolean;

    icon?: LucideIcon;
    iconSize?: number;
    iconColor?: string;

    width?: "auto" | "full" | "fit" | string;
    align?: "left" | "center" | "right";

    // Propriedades de borda
    borderColor?: string;
    borderWidth?: string;
    rounded?: "2xl"|"3xl"|"4xl"| string;

    // Propriedades de padding
    px?: string;
    py?: string;
    mx?: string;
    my?: string;
    
    // Propriedades de fonte
    fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | string;
    fontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | string;

    // Propriedades de hover
    hoverBgColor?: string;
    hoverTextColor?: string;
    hoverIconColor?: string;
    hoverBorderColor?: string;
    hoverBorderWidth?: string;
    hoverScale?: string;
    hoverShadow?: string;
    hoverTransition?: string;
    hoverDuration?: string;
};

export default function Button({ 
    
    title, 
    bgColor = "bg-white",
    textColor = "text-black",
    action, 
    styles, 
    disabled = false,
    icon: Icon,
    iconSize = 20,
    iconColor = "text-black",
    width = "auto",
    align = "center",
    borderColor,
    borderWidth = "border",
    rounded = "rounded-[10px]",
    px = "px-0",
    py = "py-0",
    mx = "px-0",
    my = "py-0",
    fontWeight = "semibold",
    fontSize = "base",

    // Hover props - todos undefined por padrão
    hoverBgColor,
    hoverTextColor,
    hoverIconColor,
    hoverBorderColor,
    hoverBorderWidth,
    hoverScale,
    hoverShadow,
    hoverTransition,
    hoverDuration,

}: Props) {
    
    // Mapeamento das larguras para classes Tailwind
    const widthClasses = {
        auto: "w-auto",
        full: "w-full",
        fit: "w-fit"
    };
    
    // Mapeamento dos alinhamentos para classes Tailwind
    const alignClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end"
    };
    
    // Mapeamento dos pesos da fonte
    const fontWeightClasses = {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold"
    };
    
    // Mapeamento dos tamanhos da fonte
    const fontSizeClasses = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl"
    };
    
    // Verifica se é uma largura personalizada
    const isCustomWidth = !["auto", "full", "fit"].includes(width);
    const widthClass = isCustomWidth ? width : widthClasses[width as keyof typeof widthClasses];
    
    // Verifica se é um peso personalizado
    const fontWeightClass = fontWeight in fontWeightClasses
        ? fontWeightClasses[fontWeight as keyof typeof fontWeightClasses]
        : fontWeight;
    
    // Verifica se é um tamanho personalizado
    const fontSizeClass = fontSize in fontSizeClasses
        ? fontSizeClasses[fontSize as keyof typeof fontSizeClasses]
        : fontSize;
    
    // Constrói as classes de hover
    const getHoverClass = (hoverValue?: string) => {
        if (!hoverValue) return "";
        if (hoverValue.startsWith("hover:") || hoverValue.startsWith("group-hover:")) return hoverValue;
        return `hover:${hoverValue}`;
    };
    
    // Classes de hover - apenas se forem fornecidas
    const hoverBgClass = hoverBgColor ? getHoverClass(hoverBgColor) : "";
    const hoverTextClass = hoverTextColor ? getHoverClass(hoverTextColor) : "";
    const hoverIconClass = hoverIconColor ? getHoverClass(hoverIconColor) : "";
    const hoverBorderColorClass = hoverBorderColor ? getHoverClass(hoverBorderColor) : "";
    const hoverBorderWidthClass = hoverBorderWidth ? getHoverClass(hoverBorderWidth) : "";
    const hoverScaleClass = hoverScale ? `hover:scale-${hoverScale}` : "";
    const hoverShadowClass = hoverShadow ? getHoverClass(hoverShadow) : "";
    const hoverTransitionClass = hoverTransition || "";
    const hoverDurationClass = hoverDuration || "";
    
    return (
        <button
            disabled={disabled}
            onClick={action}
            style={disabled ? { backgroundColor: 'gray', cursor: 'not-allowed', opacity: 0.6 } : {}}
            className={`
            ${widthClass} 
            ${alignClasses[align]} 
            ${bgColor} 
            ${textColor} 
            ${borderWidth} 
            ${borderColor || ''} 
            ${rounded} 
            ${px} 
            ${py} 
            ${mx} 
            ${my} 
            ${fontWeightClass} 
            ${fontSizeClass} 
            ${hoverTransitionClass}
            ${hoverDurationClass}
            ${hoverBgClass}
            ${hoverTextClass}
            ${hoverBorderColorClass}
            ${hoverBorderWidthClass}
            ${hoverScaleClass}
            ${hoverShadowClass}
            ${styles}
            cursor-pointer 
            flex 
            items-center 
            gap-2
            group  {/* ← ADICIONAR group AQUI */}
            ${disabled ? 'cursor-not-allowed opacity-50' : ''}
        `}
        >
            {Icon && (
                <Icon 
                    size={iconSize} 
                    className={`
                        ${iconColor}
                        ${hoverTransitionClass}
                        ${hoverDurationClass}
                        ${hoverIconClass}
                    `}
                />
            )}
            <span>
                {title.toUpperCase()}
            </span>
        </button>
    );
}