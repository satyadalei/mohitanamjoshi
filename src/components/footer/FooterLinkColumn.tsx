import Link from 'next/link';
import React, { FC } from 'react'
interface ILinkColProps {
    linkCategory: string,
    links: ILinkDetails[]
}

interface ILinkDetails {
    url: string;
    name: string;
}

const FooterLinkColumn: FC<ILinkColProps> = ({ linkCategory, links }) => {
    return (
        <div>
            <p className="font-medium tracking-wide text-gray-300">
                {linkCategory}
            </p>
            <ul className="mt-2 space-y-2">
                {links.map((link, i) => {
                    return (
                        <li key={i} >
                            <Link
                                href={link.url}
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                            >
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FooterLinkColumn