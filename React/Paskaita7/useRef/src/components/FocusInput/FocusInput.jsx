import { useRef } from "react";

export default function FocusInput() {
  const focusInputRef = useRef();

  return (
    <div>
      <button
        onClick={() => {
          focusInputRef.current.focus();
        }}
      >
        Press me
      </button>
      <input type="text" ref={focusInputRef} />
    </div>
  );
}
