import React from 'react'

const login = () => {
  return (
    <div className='h-screen flex align-center justify-center'>
      <section >
        <div className="h-full">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="/loginImage.png"
                className="w-full"
                alt="Sample image" />
            </div>

            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <div className="mb-14">
                <h2 className="w-min rounded text-3xl">Login</h2>
                <span className="text-neutral-500">Donec tortor quam at duis tortor.</span>
              </div>
              <form >
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput2"
                    placeholder="Email address" />
                  <label
                    for="exampleFormControlInput2"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.75rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  >Email address
                  </label>
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput22"
                    placeholder="Password" />
                  <label
                    for="exampleFormControlInput22"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.75rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  >Password
                  </label>
                </div>

                <div className="mb-6 flex items-center justify-end">
                  <a href="#!">Forgot password?</a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="w-full pt-2 pb-2 rounded bg-blue-600	text-white"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Login
                  </button>
                  <div
                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p
                      className="mx-4 mb-0 text-center text-black">
                      Or
                    </p>
                  </div>

                  <button
                    type="button"
                    className="w-full pt-2 pb-2 rounded border-2"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default login