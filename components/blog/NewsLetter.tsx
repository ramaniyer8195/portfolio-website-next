"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { subscribeToNewsletter } from "@/lib/requests";
import { ClientError } from "graphql-request";

const NewsLetter = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");

  const handleError = (err: ClientError) => {
    if (!err.response.errors) {
      setError("Something went wrong!");
    } else {
      setError(err.response.errors[0]!.message);
    }
  };

  const handleSuccess = () => {
    setSuccess(
      "Thank you for subscribing! Check your email to confirm your subscription."
    );
    setEmail("");
  };

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["newsletter"],
    mutationFn: subscribeToNewsletter,
    onError: handleError,
    onSuccess: handleSuccess,
  });

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    mutateAsync(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setSuccess("");
    setEmail(e.target.value);
  };

  return (
    <form className="flex flex-col gap-1 p-10 bg-[#27272c] rounded-xl items-center w-fit m-auto">
      <h2 className="text-accent text-3xl">Subscribe now</h2>
      <p className="mb-2">Get notified about the next updates</p>
      <Input
        type="email"
        placeholder="Email address"
        className="mb-2"
        onChange={handleEmailChange}
        value={email}
      />
      <Button
        onClick={handleSubscribe}
        disabled={isPending}
        size="md"
        className="max-w-40"
      >
        Subscribe
      </Button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-accent">{success}</p>}
    </form>
  );
};

export default NewsLetter;
