import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex h-[80vh] w-full items-center justify-center z-50">
            <SignIn />
        </div>
    )
  }