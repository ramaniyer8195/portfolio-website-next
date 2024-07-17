import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <form className="flex flex-col gap-1 p-10 bg-[#27272c] rounded-xl items-center w-fit m-auto">
      <h2 className="text-accent text-3xl">Subscribe now</h2>
      <p className="mb-2">Get notified about the next updates</p>
      <Input type="email" placeholder="Email address" className="mb-2" />
      <Button size="md" className="max-w-40">
        Subscribe
      </Button>
    </form>
  );
};

export default NewsLetter;
