
export default function TextField({
  label,
  name,
  placeholder,
  errors,
}: {
  label: string;
  name: string;
  placeholder: string;
  errors: Record<string, string>;
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors[name] ? (
        <p className="text-red-500 text-xs">{errors[name]}</p>
      ) : null}
    </div>
  );
}