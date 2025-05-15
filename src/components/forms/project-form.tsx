'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Selection {
  id: string;
  extraDesigns: number;
  extraRevisions: number;
}

interface Props {
  selections: Selection[];
  subtotal: number;
}

export default function ProjectForm({ selections, subtotal }: Props) {
  const router = useRouter();

  // Form fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [deadline, setDeadline] = useState('');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [instructions, setInstructions] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to terms and conditions.');
      return;
    }

    // TODO: Integrate API/email service
    console.log({
      selections,
      subtotal,
      name,
      email,
      company,
      deadline,
      budget,
      description,
      files,
      instructions,
    });

    router.push('/design/thank-you');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Project Details</h2>

      {/* Contact & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Full Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email Address *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Company / Brand</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Project Deadline *</label>
          <input
            type="date"
            required
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      {/* Budget */}
      <div className="mt-4">
        <label className="block mb-1 font-medium">Budget Range</label>
        <input
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="$500 - $1,000"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      {/* Description */}
      <div className="mt-4">
        <label className="block mb-1 font-medium">Project Description *</label>
        <textarea
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      {/* File Uploads */}
      <div className="mt-4">
        <label className="block mb-1 font-medium">Attach Reference Files</label>
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="w-full"
        />
      </div>

      {/* Special Instructions */}
      <div className="mt-4">
        <label className="block mb-1 font-medium">Special Instructions</label>
        <textarea
          rows={3}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      {/* Terms & Confirmation */}
      <div className="mt-6 flex items-center">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="agree" className="text-sm">
          I agree to the{' '}
          <a href="/terms" className="underline text-indigo-600">
            terms & conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-indigo-500 text-white py-3 rounded hover:bg-indigo-600"
      >
        Send My Request
      </button>
    </form>
  );
}
