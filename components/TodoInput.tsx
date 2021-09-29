
import React from "react";


const TodoInput = () => {
  return (
    <>
              <div className="flex items-center text-sm mt-2">
            <button>
              <svg
                className="w-3 h-3 mr-3 focus:outline-none"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
            <span>Click to add task</span>
          </div>
          <input
            type="text"
            placeholder="what is your plan for today"
            className="rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4"
          />
          </>
)
}

export default TodoInput;