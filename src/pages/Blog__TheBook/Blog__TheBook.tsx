import { Blog } from "../../components/Blog/Blog"
import { Blog_Paragraph } from "../../components/Blog/Blog_Pieces"


const Blog__TheBook = () => {
    return (
        <div>
            <Blog construction={true} title="The Book">
                <Blog_Paragraph text="The Book is a project that I started in highschool. This is an expansive collection of great thoughts, ideas, practices, and philosphies." />
                <Blog_Paragraph text={`
                    Sun Tzu quotes, storytelling ideas from PIXAR, biographical information about great artists and thinkers,
                    reading lists from our planet's great innovative minds, and a mixed-bag of other written ideas.
                    `} />
                <Blog_Paragraph text={`
                    After UrFriends is fully migrated to AWS, turning this inspirational collection of highly motivational material into a simple mobile app is up next.
                    `} />

            </Blog>
        </div>
    )
}

export default Blog__TheBook