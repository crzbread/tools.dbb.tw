import { FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

type AdPlaceholderProps = {
  type?: "warning" | "info";
};

const AdPlaceholder = ({ type = "warning" }: AdPlaceholderProps) => {
  const isWarning = type === "warning";
  const iconClass = "shrink-0 w-6 h-6";
  const icon = isWarning ? (
    <FaExclamationTriangle className={`text-black ${iconClass}`} />
  ) : (
    <FaInfoCircle className={`text-black ${iconClass}`} />
  );

  return (
    <div className="container mx-auto my-6">
      <div className={`alert ${isWarning ? "alert-warning" : "alert-info"}`}>
        {icon}
        <div>
          <h3 className="font-bold">廣告位置</h3>
          <div className="text-sm">Google Ads 橫幅廣告位置</div>
        </div>
      </div>
    </div>
  );
};

export default AdPlaceholder;
