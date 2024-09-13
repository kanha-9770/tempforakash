import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadcrumbProduct: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center font-poppins space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.href ? (
              <a
                href={item.href}
                className={`inline-flex items-center md:text-2xl font-semibold ${
                  item.current
                    ? "text-gray-500"
                    : "text-gray-700 hover:text-[#483d78] dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {index === 0 ? (
                  <>{item.label}</>
                ) : (
                  <>
                    {" > "}
                    {item.label}
                  </>
                )}
              </a>
            ) : (
              <span
                className={`inline-flex items-center font-poppins font-regular md:text-2xl ${
                  item.current ? "text-gray-400" : "text-gray-400"
                }`}
              >
                {index !== 0 && " > "}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbProduct;
