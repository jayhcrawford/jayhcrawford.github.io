import { Blog, Blog_Paragraph } from "../../components/Blog/Blog"

const Blog__TheRipSheet = () => {
    return (
        <div>
            <Blog construction={true} title="The Rip Sheet">
                <Blog_Paragraph text="In 2020, I decided that I wanted to learn how to weightlift. Over the past five years, through various iterations, I've developed a system that I call the RIP sheet." />
                <Blog_Paragraph text="After a few years of iterating, I landed on a simple, spreadsheet-based system. It's allowed me to track every rep that I've made since 2022." />
                <Blog_Paragraph text="Recently, I took a linear algebra for data analysis course, and used Python to create least square regression analyses of each one of my exercises over the past 2.5 years." />
                <Blog_Paragraph text="My hope is to create a fitness app that allows people to develop realistic and healthy physical fitness routines and give useful visualizations that will let users know for sure how to generate real physical progress." />
            </Blog>
        </div>
    )
}

export default Blog__TheRipSheet