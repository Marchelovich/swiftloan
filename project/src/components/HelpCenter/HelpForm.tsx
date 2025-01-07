import React, { useState } from 'react';
import { CloseButton } from '../common/CloseButton';

interface HelpFormProps {
  onClose: () => void;
}

export const HelpForm: React.FC<HelpFormProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Help Center</h2>
          <CloseButton onClose={onClose} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          <textarea
            placeholder="How can we help you?"
            rows={4}
            className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold 
              hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl
              animate-gradient bg-[length:200%_200%]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};