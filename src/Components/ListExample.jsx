
import React, { useState, useMemo } from 'react';
 

const data = [
    {
        main: "1st Main",
        sub: [
            { text: "1st sub Main", href: "/navbar" },
            { text: "2nd sub Main", href: "/about" },
            { text: "11th sub Main", href: "/" },
            { text: "12th sub Main", href: "/navbar" },
            { text: "6th sub Main", href: "/aboutNew" },
            { text: "13th sub Main", href: "/" },
            { text: "14th sub Main", href: "/IconPage" }
        ]
    },
    {
        main: "2nd Main",
        sub: [
            { text: "3rd sub Main", href: "/aboutNew" },
            { text: "4th sub Main", href: "/IconPage" }
        ]
    },
    {
        main: "3rd Main",
        sub: [
            { text: "5th sub Main", href: "/navbar" },
            { text: "6th sub Main", href: "/about" },
            { text: "13th sub Main", href: "/" },
            { text: "14th sub Main", href: "/navbar" },
            { text: "6th sub Main", href: "/aboutNew" },
            { text: "13th sub Main", href: "/" },
            { text: "14th sub Main", href: "/IconPage" }
        ]
    },
    {
        main: "4th Main",
        sub: [
            { text: "7th sub Main", href: "/navbar" },
            { text: "8th sub Main", href: "/about" }
        ]
    },
    {
        main: "5th Main",
        sub: [
            { text: "9th sub Main", href: "/navbar" },
            { text: "10th sub Main", href: "/about" },
            { text: "14th sub Main", href: "/aboutNew" },
            { text: "15th sub Main", href: "/IconPage" }
        ]
    },
];

function ListExample() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => {
        if (!searchTerm) {
            return data;
        }

        return data.map(item => ({
            ...item,
            sub: item.sub.filter(subItem =>
                subItem.text.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })).filter(item =>
            item.main.toLowerCase().includes(searchTerm.toLowerCase()) || item.sub.length > 0
        );
    }, [searchTerm]);


    return (
        <div className="pull-left">
            <input
                type="search"
                placeholder="Search Menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchbar"
            />
           
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>
                        {item.main}
                        <ul>
                            {item.sub.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                    <a href={subItem.href}  className="l-link">
                                        {subItem.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>


        </div>
    );
}


export default ListExample;
