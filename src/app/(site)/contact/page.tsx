import { EmailText } from "./EmailText";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <main className="border-gray-300 border-[1px] py-5 px-4 flex flex-col gap-10 items-start shadow-gray-300 shadow-md lg:flex-row md:mx-28 lg:mx-32 xl:mx-52">
      <div className="flex flex-col gap-4 lg:justify-between lg:h-96 lg:w-1/2 lg:py-10">
        <header className="">
          <h1 className="text-2xl text-white font-extrabold">Send a message</h1>
          <h3 className="text-white font-">(It&apos;s free)</h3>
        </header>
        <p className="text-white font-medium text-lg text-justify">
          You are one step away from making your business even more valuable.
          Why don&apos;t you start by telling me what your needs are? I will
          reach back to you as soon as possible.
        </p>
        <EmailText />
      </div>
      <ContactForm />
    </main>
  );
}
