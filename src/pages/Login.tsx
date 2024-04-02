import styled from "styled-components";
import { LoginForm } from "@/components/auth/";
import { Heading } from "@/components/typography";

const LoginLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
`;

function Login() {
    return (
        <LoginLayout>
            
            <Heading className="flex justify-center items-center" as="h2">
                Log in to your account
            </Heading>
            <LoginForm />
        </LoginLayout>
    );
}

export default Login;
