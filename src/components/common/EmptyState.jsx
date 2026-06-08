import { Inbox } from "lucide-react";

const EmptyState = ({ title = "No Data Found" }) => {
  return (
    <div className="text-center py-12">
      <Inbox size={50} className="mx-auto text-gray-400" />

      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default EmptyState;
