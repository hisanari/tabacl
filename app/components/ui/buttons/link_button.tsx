export default function LinkButton({name, href}: { name: string; href: string; }) {
    return (
        <a
        className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-blue-800 underline"
        href={href}
        >
        {name}
        </a>
    );
}