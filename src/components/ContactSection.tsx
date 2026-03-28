'use client';

import { useApp } from '@/context/AppContext';
import { useState } from 'react';

export default function ContactSection() {
  const { t, isRTL } = useApp();
  const [activeTab, setActiveTab] = useState<'get' | 'post'>('get');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!name || !message || sending) return;
    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name,
          message,
          from_email: 'portfolio-contact@beny-zion.dev',
          subject: `Portfolio Contact from ${name}`,
        }),
      });
      if (res.ok) {
        setSent(true);
        setName('');
        setMessage('');
        setTimeout(() => setSent(false), 3000);
      }
    } catch {
      // fallback to mailto
      const mailtoUrl = `mailto:b4123190@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      window.open(mailtoUrl, '_blank');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-3 md:px-4 bg-gray-50 dark:bg-gray-900/50 transition-colors">
      <div className="max-w-3xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="text-center mb-8 md:mb-12">
          <span className="font-mono text-xs md:text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-md">
            /api/contact
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-3 md:mt-4">{t.contact.sectionTitle}</h2>
        </div>

        <div className="bg-gray-900 dark:bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-800 dark:border-gray-700">
          {/* Terminal Header */}
          <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 md:py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
            <span className="ml-1.5 md:ml-2 text-xs text-gray-400 font-mono">contact-api</span>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-700" dir="ltr">
            <button
              onClick={() => setActiveTab('get')}
              className={`px-4 py-2.5 md:py-2 font-mono text-sm transition-colors ${
                activeTab === 'get'
                  ? 'text-emerald-400 border-b-2 border-emerald-400 bg-gray-800/50'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              GET
            </button>
            <button
              onClick={() => setActiveTab('post')}
              className={`px-4 py-2.5 md:py-2 font-mono text-sm transition-colors ${
                activeTab === 'post'
                  ? 'text-emerald-400 border-b-2 border-emerald-400 bg-gray-800/50'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              POST
            </button>
          </div>

          <div className="p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto" dir="ltr">
            {activeTab === 'get' ? (
              <>
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <span className="text-emerald-400">$</span>
                  <span className="text-white">{t.contact.getCommand}</span>
                </div>
                <div className="text-gray-400 mb-2">// Response: 200 OK</div>
                <pre className="text-emerald-300 whitespace-pre-wrap leading-relaxed wrap-break-word">
                  {'{\n'}
                  {'  "developer": "Beny Zion",\n'}
                  {'  "email": '}
                  <a href="mailto:b4123190@gmail.com" className="underline hover:text-emerald-200 text-emerald-300">
                    &quot;b4123190@gmail.com&quot;
                  </a>
                  {',\n'}
                  {'  "github": '}
                  <a href="https://github.com/beny-zion" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-200 text-emerald-300">
                    &quot;github.com/beny-zion&quot;
                  </a>
                  {',\n'}
                  {'  "action": "' + t.contact.action + '"\n'}
                  {'}'}
                </pre>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <span className="text-emerald-400">$</span>
                  <span className="text-white">{t.contact.postCommand}</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-400 text-xs mb-1 block">&quot;name&quot;:</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2.5 md:py-2 text-sm md:text-base text-white placeholder-gray-600 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs mb-1 block">&quot;message&quot;:</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      rows={3}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2.5 md:py-2 text-sm md:text-base text-white placeholder-gray-600 focus:border-emerald-500 focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSend}
                    className="px-5 py-2.5 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition-colors text-sm"
                  >
                    {sent ? '✓ 200 OK' : sending ? '...' : `${t.contact.send} →`}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
