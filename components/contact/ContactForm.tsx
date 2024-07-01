import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
      <h3 className="text-4xl text-accent">Let&apos;s get in touch</h3>
      <p className="text-white/60">
        Don&apos;t hesitate to contact me! Whether it&apos;s about new projects,
        collaborations, or just to say hello, I&apos;m open and excited to hear
        from you. Let&apos;s connect!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="firstname" placeholder="Firstname" />
        <Input type="lastname" placeholder="Lastname" />
        <Input type="email" placeholder="Email address" />
        <Input type="phone" placeholder="Phone number" />
      </div>
      <Textarea className="h-[200px]" placeholder="Type your message here." />
      <Button size="md" className="max-w-40">
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
