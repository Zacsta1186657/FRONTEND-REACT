import SignUpForm from "@/components/auth/SignUpForm"
import AuthLayout from "./AuthPages/AuthPageLayout"

function Register() {
    return (
        <>
            {/*<PageMeta
                title="React.js SignIn Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js SignIn Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />*/}
            <AuthLayout>
                <SignUpForm />
            </AuthLayout>
        </>

    )
}

export default Register