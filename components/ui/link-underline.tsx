import Link, { LinkProps } from "next/link";
import React from "react";

type Props = React.PropsWithChildren<
    LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

export default function LinkUnderline({ children, ...props }: Props) {
    return (
        <Link
            {...props}
            className={`relative before:content-[''] before:absolute before:w-0 before:h-0.5 before:bg-secondary before:-bottom-0.5 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:w-6 before:rounded-lg ${props.className ?? ""}`}
        >
            {children}
        </Link>

    );
}
