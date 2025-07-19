import { Blog } from "../../components/Blog/Blog"
import { Blog_Paragraph } from "../../components/Blog/Blog_Pieces"

const Blog__UrFriends = () => {
    return (
        <div>
            <Blog construction={true} title="UrFriends">
                <Blog_Paragraph text="UrFriends is designed to help you build real, lasting relationships using your device. " />
                <Blog_Paragraph text={`
                Inspired by the documented habits of highly influential thinkers like Benjamin Franklin and Charles Darwin, and by the routines of my endlessly social Grandmother Faye, UrFriends is about staying connected with intention—not just collecting contacts. 
                Organize your relationships into tiers and set unique reminder timeframes for each. A tier could be set for a daily reach-out, weekly, or even yearly. Each contact has a conversations journal, so you can take notes after reaching out and remember the things that matter.
                There is a functional beta for a single user on my Github. The beta is React.js, Node, and MongoDB based. 
                `} />
                <Blog_Paragraph text={`
                I’m currently migrating functionality to AWS to support real users. Google and Apple integration is on the way.
                UrFriends is for people who believe technology should bring us together—not make us busier.`} />
            </Blog>
        </div>
    )
}

export default Blog__UrFriends