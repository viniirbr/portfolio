import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href?: string;
  imageSrc: string;
  title: string;
  imageAlt: string;
  openNewTab?: boolean;
}

export function Item({
  children,
  href,
  imageAlt,
  imageSrc,
  title,
  openNewTab,
}: Props) {
  const fixedChildren = (
    <div className="bg-white flex flex-col gap-2 rounded-md w-full h-fit p-4 shadow-md shadow-black hover:shadow-md hover:shadow-purple-500 hover:scale-[1.01] active:shadow-none transition-all duration-500 ease-out hover:ease-in">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={200}
          height={200}
          className="w-full rounded-md"
          unoptimized
        />
      )}
      <h3 className="text-gray-800 text-lg font-bold">{title}</h3>
      {children}
    </div>
  );

  if (href)
    return (
      <Link
        href={href}
        className="hover:cursor-pointer"
        target={openNewTab ? "_blank" : "_self"}
      >
        {fixedChildren}
      </Link>
    );

  return <div>{fixedChildren}</div>;
}
