"use client";
import { useState } from "react";
import { Input } from "../components/UI/Input";
import { TextArea } from "../components/UI/TextArea";
import { Button } from "../components/UI/Button";
import { ToastContainer, toast } from "react-toastify";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({ name, from: email, subject, message }),
      });
      if (response.status !== 200)
        throw new Error(
          "Something went wrong sending the email. Please try again later."
        );
      toast.success(
        "Email sent successfully! If you don't receive a confirmation email from me, you probably mispeled your email",
        { autoClose: 8000 }
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error: any) {
      console.log("error", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="w-full flex flex-col items-start gap-5">
      <ToastContainer position="top-center" />
      <Input
        type="text"
        label="Your name"
        id="name"
        autoFocus
        required
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <Input
        type="email"
        label="Your email"
        id="email"
        required
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <Input
        type="text"
        label="Subject"
        id="subject"
        onChange={(event) => setSubject(event.target.value)}
        value={subject}
      />
      <TextArea
        label="Message"
        maxLength={500}
        required
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
      <Button
        text="Send"
        onClick={() => {}}
        type="submit"
        className="w-full justify-center bg-orange-500 text-white text-lg h-12 hover:bg-orange-600 active:bg-orange-400 disabled:bg-gray-400"
        disabled={!name || !email || !message || loading}
        loading={loading}
      />
      <p
        className={`text-red-500 font-medium sm:text-md md:text-lg ${
          error || "text-transparent"
        }`}
      >
        {error}
      </p>
    </form>
  );
}
