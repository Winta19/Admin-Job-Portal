import { useState } from "react";

function NavNotice() {
  const [isOpen, setIsOpen] = useState(false);

  // Example notifications
  const notifications = [
    "New job application received",
    "Scheduled meeting at 3 PM",
    "New comment on your post",
  ];
  return (
    <div className=" relative ">
      {/* Notification Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
        {/* Unread notifications count */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
          {notifications.length}
        </span>
      </button>
      {/* Dropdown Notifications */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50">
          <ul className="divide-y divide-gray-200">
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                >
                  {notification}
                </li>
              ))
            ) : (
              <li className="p-3 text-gray-500">No notifications</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavNotice;
