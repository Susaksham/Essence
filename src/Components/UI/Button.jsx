/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Button = ({ onClick, text }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="text-slate-50 text-4xl border border-[#156669] bg-[#156669] px-4 py-2 rounded-lg"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
