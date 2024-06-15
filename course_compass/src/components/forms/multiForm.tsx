import { Button } from '@nextui-org/react';

export default function MultiForm() {
  return (
    <div className="flex flex-col justify-evenly items-center h-screen w-full">
      <section className="flex flex-col gap-4 justify-center items-center w-5/12">
        <form className="flex flex-col items-left gap-2 w-full">
          <h1 className="flex flex-col text-3xl py-7">
            Form Title
          </h1>
          Name
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          Username
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </form>
      </section>
      <footer className="flex w-screen justify-around pt-10">
        <Button className="px-2 py-3 w-1/12">
          Back
        </Button>

        <Button className="bg-violet-500 font-bold text-white px-2 py-3 w-1/12">
          Next
        </Button>

      </footer>
    </div>

  );
}
