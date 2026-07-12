"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Github, Gitlab, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { playUiClick } from "./sound-toggle";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  subject: z.string().min(3, "Add a short subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    playUiClick();
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    );
    const subject = encodeURIComponent(values.subject);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  }

  return (
    <section
      id="contact"
      data-reveal
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="contact-heading"
          className="font-[family-name:var(--font-space)] text-3xl font-bold text-white md:text-4xl"
        >
          Contact
        </h2>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cyan-300/80">
          Let&apos;s build something exceptional
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div
            data-reveal
            className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-8"
          >
            <div className="flex gap-3 text-slate-300">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-white hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3 text-slate-300">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Phone
                </p>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="text-white hover:text-cyan-300"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-3 text-slate-300">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Location
                </p>
                <p className="text-white">{profile.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Link
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  GitHub
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Link
                  href={profile.social.gitlab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Gitlab className="h-4 w-4" aria-hidden />
                  GitLab
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Link
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <div
            data-reveal
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-8"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="border-white/10 bg-white/5 text-white"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="border-white/10 bg-white/5 text-white"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Subject</FormLabel>
                      <FormControl>
                        <Input
                          className="border-white/10 bg-white/5 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[120px] border-white/10 bg-white/5 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white sm:w-auto"
                >
                  <Send className="mr-2 h-4 w-4" aria-hidden />
                  Send via email
                </Button>
                <p className="text-xs text-slate-500">
                  Submits using your device&apos;s mail client. For API-based
                  delivery, add a route handler or EmailJS keys later.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
