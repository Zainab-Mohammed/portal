import { useEffect } from "react";
import style from "@/styles/ListSidebar.module.css";
import { header } from "@/Lib/list";
import Link from "next/link";

export default function ListSidebar() {
    useEffect(() => {
        const searchBtn = document.querySelector(`.${style.searchbtn}`);

        if (searchBtn) {
            searchBtn.addEventListener("click", () => {
                const inputElement = document.querySelector(`.${style.search}`);
                const contentElements = document.querySelectorAll(`.${style.content} p`);

                if (inputElement && contentElements.length > 0) {
                    const input = inputElement.value.trim();
                    if (input !== "") {
                        const regex = new RegExp(input, "gi");

                        contentElements.forEach((element) => {
                            element.innerHTML = element.textContent.replace(regex, "<mark>$&</mark>");
                        });
                    }
                }
            });
        }

        // Cleanup event listener when component unmounts
        return () => {
            if (searchBtn) {
                searchBtn.removeEventListener("click", () => {});
            }
        };
    }, []);

    return (
        <>
            <div className={style["body"]}>
                <div className={style["container"]}>
                    {header.map((headerItem, index) => (
                        <Link href={`#${headerItem.head.replace(/\s+/g, '-').toLowerCase()}`} key={index}>
                            <h2>{headerItem.head}</h2>
                        </Link>
                    ))}
                </div>

                <div className={style["content"]}>
                    <input type="text" name="search" className={style["search"]} />
                    <button className={style["searchbtn"]}>Search</button>
                    {header.map((item, index) => (
                        <div key={index} id={item.head.replace(/\s+/g, '-').toLowerCase()}>
                            <h2>{item.head}</h2>
                            {item.content.split(/[.:]/).map((sentence, idx) => (
                                <p key={idx}>{sentence.trim()}.</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
