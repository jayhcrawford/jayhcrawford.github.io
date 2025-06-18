import { JSX } from "react";
import { secondaryFont } from "../../styles"

interface Blog__Props {
    children: JSX.Element[] | JSX.Element;
    title: string;
    construction: boolean;
}

export const Blog = (props: Blog__Props) => {
    return (
        <>
            <div className="text-white m-10" >
                {props.construction == true &&
                    <div className="flex justify-center mb-10">
                        <div className="flex flex-col">
                            <div className='flex justify-center'>
                                <div className="h-40 w-40">
                                    <img src="./under_construction.svg" />
                                </div>
                            </div>
                            <p className="inline-block bg-red-500 rounded-xl text-center font-extrabold text-4xl" >This section is under construction</p>
                        </div>
                    </div>}
                <h1 style={{ fontFamily: secondaryFont }} id="blog_header" className="text-5xl text-white font-extrabold pb-10 ">
                    {props.title}
                </h1>
                <div className="p-5" style={{ backgroundColor: "#0b0f17", borderRadius: "20px" }}>
                    {props.children}
                </div>
            </div >
        </>

    )
}
