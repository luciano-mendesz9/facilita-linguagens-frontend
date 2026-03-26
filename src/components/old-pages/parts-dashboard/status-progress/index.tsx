import { BookOpenCheck, Clock, FileChartColumnIncreasing, ChevronRight, LucideIcon } from "lucide-react";

interface StatusProgressProps {
  icon: LucideIcon;  
  tipoDoStatus?: string;
  valorDoStatus?: string | number;
  text?: string;
  
  iconColor?: string;        
  bgIconColor?: string;      
  borderIconColor?: string;  
}

export default function StatusProgress({ 
  icon: Icon,  
  tipoDoStatus = "---",
  valorDoStatus = "-",
  text = "",
  iconColor = "text-blue-600",        
  bgIconColor = "bg-blue-200",        
  borderIconColor = "border-blue-600" 
}: StatusProgressProps) {

  return(
    <div className="bg-white border-1 border-gray-300 rounded-3xl shadow-md hover:shadow-lg transition flex w-full max-w-sm mx-auto sm:w-68 font-semibold relative">
      <div className="border-r-2 border-gray-200 p-5 relative">
        <div className={`border-1 ${borderIconColor} ${bgIconColor} p-3 h-16 w-16 rounded-4xl`}>
          <Icon size={38} strokeWidth={1} className={iconColor}/>
        </div>
      </div>

      <div className="border-gray-200 w-full pb-1 text-black relative text-center pt-6">
        <span>{tipoDoStatus}</span>
        <div className="text-4xl ">
          {valorDoStatus} 
          <span className="text-4xl font-semibold">{text}</span>
        </div>
      </div>
    </div>
  );
}