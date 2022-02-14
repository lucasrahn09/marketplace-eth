export default function Button({
  children,
  className,
  variant = "purple",
  hoverable = true,
  ...rest
}) {
  const variants = {
    purple: `text-white bg-indigo-600 ${hoverable && "hover:bg-indigo-700"}`,
    red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
    white: `text-black bg-white`,
    lightPurple: `text-indigo-700 bg-indigo-200 ${
      hoverable && "hover:bg-indigo-300"
    }`,
  };

  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed xs:px-8 xs:py-3 p-2 border rounded-md text-base font-medium ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}