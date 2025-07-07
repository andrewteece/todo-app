import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import AddTodoForm from './AddTodoForm';
import Button from './Button';

export default function Sidebar() {
  const { isAuthenticated, isLoading, user, login, register, logout } =
    useKindeAuth();

  return (
    <div
      className='col-[2/3] row-[2/3] bg-[hsl(30,100%,99%)] border-l border-black/[0.08] px-2
        flex flex-col justify-between pt-2 pb-4'
    >
      <AddTodoForm />

      <div className='space-y-2'>
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className='text-sm'>Logged in as {user?.email}</p>

            <Button buttonType='secondary' onClick={() => logout()}>
              Log out
            </Button>
          </>
        ) : (
          <div className='mt-auto space-y-2'>
            <Button buttonType='secondary' onClick={() => login()}>
              Log In
            </Button>
            <Button buttonType='secondary' onClick={() => register()}>
              Register
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
