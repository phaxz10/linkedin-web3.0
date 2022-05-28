import * as React from 'react'
import { useMoralis } from 'react-moralis'

const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const usernameRef = React.useRef<HTMLInputElement>(null)
    const emailRef = React.useRef<HTMLInputElement>(null)

    const {
      isAuthenticated,
      isAuthUndefined,
      authenticate,
      user,
      setUserData,
      refetchUserData,
    } = useMoralis()

    if (isAuthUndefined) return null

    const handleFormSubmit = async (ev: React.FormEvent) => {
      ev.preventDefault()

      setUserData({
        email: emailRef.current?.value,
        username: usernameRef.current?.value,
      })

      await refetchUserData()
    }

    if (!isAuthUndefined && isAuthenticated && !user?.getEmail()) {
      return (
        <div className="grid h-screen w-screen place-items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <p>Complete your account</p>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Username"
              required
              className="border border-gray p-2"
            />
            <input
              ref={emailRef}
              type="text"
              placeholder="Email"
              required
              className="border border-gray p-2"
            />
            <button
              type="submit"
              className="rounded-full border border-blue bg-blue p-2 px-4 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      )
    }
    if (!isAuthenticated)
      return (
        <div className="grid h-screen w-screen place-items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="flex flex-col items-center">
            <img
              src="/images/LogoName.png"
              className="w-[200px] object-contain"
            />
            <p className="py-10 text-lg font-bold text-black">Web 3.0</p>
            <button
              type="button"
              onClick={async () => await authenticate({})}
              className="rounded-full bg-blue p-3 px-8 text-xl font-medium text-white"
            >
              LOGIN
            </button>
          </div>
        </div>
      )

    return <Component />
  }

  return AuthenticatedComponent
}

export default withAuth
