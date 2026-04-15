import { Blog } from "../../components/Blog/Blog";
import {
    BLOG_ACCENT_TEXT,
    Blog_ButtonCTA,
    Blog_Card,
    Blog_HeroQuote,
    Blog_Image,
    Blog_Label,
    Blog_Paragraph,
} from "../../components/Blog/Blog_Pieces";

const heroImages = [
    "https://placehold.co/800x500/e0f2fe/0f172a?text=UrFriends+Dashboard",
    "https://placehold.co/800x500/dbeafe/0f172a?text=Reminder+Composer",
    "https://placehold.co/800x500/ede9fe/0f172a?text=Relationship+Journal",
];

const Blog__UrFriends = () => {
    const accentText = BLOG_ACCENT_TEXT;

    return (
        <Blog construction={true} title="UrFriends">
            <div className="space-y-10 text-slate-100">
                <Blog_Card tone="glass" className="space-y-6 text-center">
                    <Blog_Label>Intentional relationship OS</Blog_Label>
                    <Blog_HeroQuote quote="UrFriends helps me reach out on purpose instead of out of guilt." sizePreset="balanced" />
                    <Blog_Paragraph>UrFriends started as a personal CRM inspired by Benjamin Franklin's daily ledger and my grandmother Faye's immaculate address book. Every contact lives inside a tier (daily, weekly, monthly, yearly) so I know exactly when to reach out and what we last talked about.</Blog_Paragraph>
                    <div className="flex justify-center">
                        <Blog_ButtonCTA
                            href="https://public--urfriends-beta.us-central1.hosted.app/"
                            label="Open the current beta"
                        />
                    </div>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">Core flows</Blog_Label>
                    <Blog_Paragraph>Each contact has a conversations journal, reminder cadence, and lightweight CRM fields (pronouns, kids' names, last meetup). I can promote or demote tiers in one tap. The beta began on Vercel (React + Node + MongoDB), moved to AWS Amplify, and now lives on Firebase for ease of auth + Firestore syncing.</Blog_Paragraph>
                    <div className="grid gap-6 md:grid-cols-3">
                        {heroImages.map((src, index) => (
                            <Blog_Image
                                key={src}
                                variant="full"
                                src={src}
                                alt={`UrFriends UI placeholder ${index + 1}`}
                                figureLabel={`Screen ${index + 1}`}
                                figureCaption={["Home dashboard","Tier reminder composer","Contact journal"][index]}
                                withMatte
                                imgClassName="mx-auto w-full max-w-sm aspect-video object-cover"
                                figcaptionClassName={accentText}
                            />
                        ))}
                    </div>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">Stack and roadmap</Blog_Label>
                    <Blog_Paragraph>Firebase Auth + Firestore handle the single-user beta. Background Cloud Functions generate reminders and send emails via SendGrid. I'm actively migrating core data to AWS so multi-tenant accounts can launch with scoped DynamoDB tables and Lambda triggers. Google and Apple calendar integrations are next on deck.</Blog_Paragraph>
                    <Blog_Paragraph>UrFriends is for people who still believe technology can deepen relationships. The app nudges me to share wins, remember context, and never let the meaningful folks fall through the cracks.</Blog_Paragraph>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">What's next</Blog_Label>
                    <Blog_Paragraph>Finish the AWS migration, ship OAuth with Google + Apple, and open the beta to a curated cohort of founders and community builders. Long term, I want UrFriends to feel like a human operating system we actually enjoy using.</Blog_Paragraph>
                </Blog_Card>
            </div>
        </Blog>
    );
};

export default Blog__UrFriends;
