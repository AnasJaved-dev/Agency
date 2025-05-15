'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/contact/textarea';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, email, company, subject, message });
    alert('Thanks! We’ll be in touch shortly.');
  };

  return (
    <div className="container mx-auto px-5 py-24">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Get in touch for a quote, a quick question, or to book a strategy call.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form */}
        <div className="flex-1" id="contact-form">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <Input
                id="name"
                required
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company / Organization (optional)
              </label>
              <Input
                id="company"
                value={company}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject *
              </label>
              <Input
                id="subject"
                required
                value={subject}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message *
              </label>
              <Textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full">
              Send My Message
            </Button>
          </form>
        </div>

        {/* Remote Details */}
        <aside className="flex-1 bg-gray-50 p-6 rounded-lg shadow space-y-6">
          <h2 className="text-xl font-semibold">Fully Remote Agency</h2>
          <p>Serving clients worldwide (UTC+5, PK)</p>
          <p>Hours: Mon–Fri, 9 AM – 6 PM</p>
          <p>✉️ hello@yourdomain.com</p>
          <p>🌐 yourdomain.com</p>
          <Button onClick={() => window.open('https://calendly.com/yourcalendly', '_blank')}>
            📅 Book a 15-min Call
          </Button>
        </aside>
      </div>
    </div>
  );
}
