import { ROUTES } from "@routes";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function UserProfile()
{
    return (
        <SignedIn>
            <UserButton
                userProfileMode="modal"
                afterSignOutUrl={ROUTES.SIGN_IN}
            />
        </SignedIn>
    );
};