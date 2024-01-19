'use client';
import Link from 'next/link';
import Input from '@/components/ui/input-field/Input';
import { Button } from '@/components/ui/button/Button';
import CustomLink from '@/components/ui/custom-link/CustomLink';

const Login = () => {
  /*  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
 */

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='bg-[#212121] p-8 rounded-md drop-shadow-md w-96 text-[#eaeaea] text-semibold'>
        <h1 className='text-4xl text-center font-semibold mb-8'>Login</h1>
        <form className='w-full h-full'>
          {/* {error && (
          <p>
            <b>Error:</b> {Error}
          </p>
        )} */}
          <Input
            htmlFor='username'
            id='username'
            labelValue='Username'
            name='username'
            type='text'
            handleChange={() => console.log('handle change')}
          />
          <Input
            htmlFor='password'
            id='password'
            labelValue='Password'
            name='password'
            type='password'
            handleChange={() => console.log('handle change')}
          />
          <Button type='submit' className='self-center'>
            Login
          </Button>
          <p className='text-red-600 text-[16px] mb-4'>
            {/* {error && error} */}
          </p>
        </form>
        <div className='my-4 text-center block '>
          <p className='text-[#888] '>
            Dont&apos;t have an account? Sign up now -{' '}
            <CustomLink href='/sign-up' >
              Register account
            </CustomLink>
          </p>
        </div>
        <div className='my-4 text-center '>
          <p>
            Forgot password? -{' '}
            <CustomLink href='/forgot-password'>
              Reset password
            </CustomLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
