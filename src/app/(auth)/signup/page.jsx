"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Eye, EyeClosed, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import googleIc from "@/assets/google-ico.png"

const SignUpPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPass, setIsShowPass] = useState(false);
    const router = useRouter();
    const { data: session, error } = authClient.useSession();

    const {
        handleSubmit,
        register,
    } = useForm();


    const handleSignInG = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        const { name, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            callbackURL: "/signin"
        });


        if (error) {
            toast.error("Something Went Wrong, Please try again later");
            const Button = document.getElementById('submitBtn');
            Button.innerText = "Sign Up"
            return;
        };
        if (res) {
            toast.success("Signup successful, Redirecting...");
            if (session) {
                router.push('/')
            } else {
                router.push('/signin');
            };
        };

    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-128px)] px-8 py-12">
            <ToastContainer />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white border border-border rounded-2xl p-12 w-full max-w-xl">
                <div className="font-serif text-3xl text-center mb-1">Register a Account</div>
                <div className="text-sm text-muted text-center mb-8">
                    Sign Up to for a better tutor
                </div>
                <fieldset className="mb-5">
                    <legend className="block text-sm font-semibold mb-2">Name</legend>
                    <input type="text" placeholder="Your Name"
                        {...register("name", {
                            required: "Name Is Required",
                        })}
                        className="w-full px-4 py-3 border border-border rounded-lg text-base bg-parchment text-black outline-none border-[#0A5C5A] focus:border-[#031d1d] focus:bg-white transition-all" />
                </fieldset>
                <fieldset className="mb-5">
                    <legend className="block text-sm font-semibold mb-2">Email Address</legend>
                    <input type="email" placeholder="you@email.com"
                        {...register("email", {
                            required: "email field is required",
                        })}
                        className="w-full px-4 py-3 border border-border rounded-lg text-base bg-parchment text-black outline-none border-[#0A5C5A] focus:border-[#031d1d] focus:bg-white transition-all" />
                </fieldset>
                <fieldset className={'relative flex flex-col'} >
                    <legend>Password</legend>
                    <input
                        minLength={8}
                        {...register("password")}
                        type={isShowPass ? "text" : "password"} className={'bg-gray-200 p-3'} placeholder="Enter password" />
                    <span
                        className="absolute top-4 right-5 cursor-pointer"
                        onClick={() => setIsShowPass(!isShowPass)}>
                        {
                            !isShowPass ? <EyeClosed /> : <Eye />
                        }
                    </span>
                    <div className="my-2 mb-6">Must be at least 8 characters with 1 uppercase and 1 number</div>
                </fieldset>
                <Button type="submit" id="submitBtn"
                    isDisabled={isLoading}
                    className={`w-full py-3 rounded-xl bg-[#FF6F61] text-white font-bold text-base hover:bg-[#ed3424] transition-all flex items-center justify-center cursor-pointer`}>
                    {isLoading ? "Processing..." : "Sign Up"}
                    {isLoading && <Loader className="w-5 h-5 animate-spin" />}
                </Button>
                <div className="text-center mt-4 text-sm text-muted">
                    Already have an account?
                    <Link href={'/signin'} className="text-[#0A5C5A] font-semibold cursor-pointer"> Log In</Link>
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

export default SignUpPage;