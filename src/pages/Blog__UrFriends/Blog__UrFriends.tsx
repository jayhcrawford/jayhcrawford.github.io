import { Blog, Blog_Paragraph } from "../../components/Blog/Blog"

const Blog__UrFriends = () => {
    return (
        <div>
            <Blog construction={true} title="UrFriends">
                <Blog_Paragraph text="UrFriends is designed to help you build real, lasting relationships using your device. " />
                <Blog_Paragraph text={`
                Inspired by the documented habits of world-movers Benjamin Franklin and my endlessly social Grandmother Faye, it’s about staying connected with intention—not just collecting contacts. 
                You can organize your relationships into tiers and set reminders to reach out—daily, weekly, or even yearly. Each person has a private journal, so you can take notes after conversations and remember the things that matter.
                There is a functional beta on my Github. The beta is React.js, Node, and MongoDB based. 
                `} />
                <Blog_Paragraph text={`
                I’m currently migrating functionality to AWS to support real users. Google and Apple Calendar integration is on the way.
                UrFriends is for people who believe technology should bring us together—not make us busier.`} />
            </Blog>
        </div>
    )
}

export default Blog__UrFriends