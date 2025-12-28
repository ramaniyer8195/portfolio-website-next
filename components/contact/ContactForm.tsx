"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";


const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    try {
      const response = await sendEmail(formData);
      if (response.success) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };


  return (
    <form
      className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
      onSubmit={handleSubmit}
    >
      <h3 className="text-4xl text-accent">Let&apos;s get in touch</h3>
      <p className="text-white/60">
        Don&apos;t hesitate to contact me! Whether it&apos;s about new projects,
        collaborations, or just to say hello, I&apos;m open and excited to hear
        from you. Let&apos;s connect!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          value={firstName}
          type="firstname"
          placeholder="Firstname"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          value={lastName}
          type="lastname"
          placeholder="Lastname"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          value={email}
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={phone}
          type="phone"
          placeholder="Phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <Textarea
        value={message}
        className="h-[200px]"
        placeholder="Type your message here."
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button 
        type="submit" 
        size="md" 
        className="max-w-40" 
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
      {status === "success" && (
        <p className="text-accent">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-500">Failed to send message. Please try again.</p>
      )}
    </form>

  );
};

export default ContactForm;
