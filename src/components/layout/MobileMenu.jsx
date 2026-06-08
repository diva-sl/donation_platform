import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { menuItems } from "../../constants/menu";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />

      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl overflow-y-auto">
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-xl">Mysticpace</h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="p-5 space-y-5">
          {menuItems.map((item, index) => (
            <div key={index}>
              {!item.children ? (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 font-medium"
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <h3 className="font-semibold text-orange-600 mb-3">
                    {item.title}
                  </h3>

                  <div className="ml-3 space-y-3">
                    {item.children.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-600"
                      >
                        {sub.icon} {sub.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}

          <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl font-semibold">
            Donate Now
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
