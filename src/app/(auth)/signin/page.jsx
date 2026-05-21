"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import googleIc from "@/assets/google-ico.png"

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        handleSubmit,
        register,
    } = useForm();

    const handleSignInG = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const onSubmit = async (data) => {
        setIsLoading(true);
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL: '/'
        });
        if (error) {
            toast.error(error.message);
            const button = document.getElementById('submitBtnL');
            button.innerText = "Sign In";
            return;
        };
        if (res) {
            router.push('/')
        };
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-128px)] px-8 py-12">
            <ToastContainer />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white border border-border rounded-2xl p-12 w-full max-w-md">
                <div className="font-serif text-3xl text-center mb-1">Welcome Back</div>
                <div className="text-sm text-muted text-center mb-8">
                    Log in to get a educated person
                </div>
                <fieldset className="mb-5">
                    <legend className="block text-sm font-semibold mb-2">Email Address</legend>
                    <input type="email" placeholder="you@email.com"
                        {...register("email", {
                            required: "email field is required",
                        })}
                        className="w-full px-4 py-3 border border-border rounded-lg text-base bg-parchment outline-none focus:border-[#0A5C5A] focus:bg-white transition-all" />
                </fieldset>
                <div className="mb-6">
                    <legend className="block text-sm font-semibold mb-2">Password</legend>
                    <input type="password" placeholder="••••••••"
                        {...register("password", {
                            required: "Please Enter Password"
                        })}
                        className="w-full px-4 py-3 border border-border rounded-lg text-base bg-parchment outline-none focus:border-[#0A5C5A] focus:bg-white transition-all" />
                </div>
                <Button
                    type="submit" id="submitBtnL"
                    className={`w-full py-3 rounded-xl font-bold bg-[#FF6F61] hover:bg-[#f62b18] text-white transition-all flex items-center justify-center cursor-pointer`}>
                    {isLoading ? "Processing..." : "Sign In"}
                    {isLoading && <Loader className="w-5 h-5 animate-spin" />}
                </Button>
                <div className="text-center mt-4 text-sm text-muted">
                    Don&apos;t have an account? <Link href={'/signup'} className="font-semibold cursor-pointer">Join Free →</Link>
                </div>
                <div className="w-full max-w-md mx-auto">
                    <div className="flex items-center my-6">
                        <div className="grow h-px bg-gray-300"></div>
                        <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
                        <div className="grow h-px bg-gray-300"></div>
                    </div>

                    <Button
                        onClick={handleSignInG}
                        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
                        <Image
                            src={googleIc}
                            alt="Google"
                            className="w-5 h-5"
                        />
                        <span className="text-gray-700 font-medium">
                            Login with Google
                        </span>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;