import { Blog, Blog_Paragraph } from "../../components/Blog/Blog"

const Blog__TheBook = () => {
    return (
        <div>
            <Blog construction={true} title="The Book">
                <Blog_Paragraph text="The Book is a project that I started in highschool. This is a collection of great thoughts and ideas." />
                <Blog_Paragraph text={`
                    Sun Tzu quotes, storytelling ideas from PIXAR, biographical information about great artists and thinkers,
                    and reading lists from our planet's great innovative minds.
                    `} />
                <Blog_Paragraph text={`
                    After UrFriends is fully migrated to AWS, turning this collection of highly inspirational material into a simple mobile app is up next.
                    `} />

            </Blog>
        </div>
    )
}

export default Blog__TheBook