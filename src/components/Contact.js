import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import strings from '../i18n/strings';
import Icon from './Icon';
import './Contact.css';

const SOCIALS = [
  { icon: 'github', name: 'GitHub', url: 'https://github.com/MattBuiles' },
  { icon: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/mateo-builes-73453531b' },
  { icon: 'twitter', name: 'X', url: 'https://x.com/MateB53' },
  { icon: 'instagram', name: 'Instagram', url: 'https://instagram.com/mateb53' },
];

const Contact = () => {
  const { lang } = useLanguage();
  const t = strings[lang].contact;
  const errors_t = t.form.errors;

  const [data, setData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = (d) => {
    const e = {};
    if (!d.name.trim()) e.name = errors_t.required;
    else if (d.name.trim().length < 2) e.name = errors_t.minName;
    if (!d.email.trim()) e.email = errors_t.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = errors_t.email;
    if (!d.subject.trim()) e.subject = errors_t.required;
    else if (d.subject.trim().length < 5) e.subject = errors_t.minSubject;
    if (!d.message.trim()) e.message = errors_t.required;
    else if (d.message.trim().length < 10) e.message = errors_t.minMessage;
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('sending');
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus('success');
      setData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section contact section-alt">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-num">{t.sectionNum}</span>
          <span className="kicker">{t.kicker}</span>
          <h2>
            {t.titleStart} <em className="contact__h-em">{t.titleEm}</em>?
          </h2>
          <p className="lede">{t.lede}</p>
        </header>

        <div className="contact__grid">
          <aside className="contact__side reveal">
            <h3 className="about__sub">{t.directChannels}</h3>
            <ul className="contact__channels">
              {t.info.map((info) => (
                <li key={info.label}>
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact__channel"
                  >
                    <Icon name={info.icon} size={18} className="contact__channel-icon" />
                    <span className="contact__channel-body">
                      <span className="contact__channel-label">{info.label}</span>
                      <span className="contact__channel-value">{info.value}</span>
                    </span>
                    <Icon name="external-link" size={14} className="contact__channel-arrow" />
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="about__sub contact__side-sub">{t.socials}</h3>
            <ul className="contact__socials">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social"
                    aria-label={s.name}
                    title={s.name}
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>

            <div className="contact__availability">
              <span className="contact__availability-dot" aria-hidden="true" />
              <div>
                <strong>{t.availabilityTitle}</strong>
                <p>{t.availabilityText}</p>
              </div>
            </div>
          </aside>

          <form className="contact__form reveal reveal-delay-1" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name">{t.form.name}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={handleChange}
                  className={errors.name ? 'is-error' : ''}
                  placeholder={t.form.namePh}
                  disabled={status === 'sending'}
                />
                {errors.name && <span className="contact__field-error">{errors.name}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">{t.form.email}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                  className={errors.email ? 'is-error' : ''}
                  placeholder={t.form.emailPh}
                  disabled={status === 'sending'}
                />
                {errors.email && <span className="contact__field-error">{errors.email}</span>}
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject">{t.form.subject}</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={data.subject}
                onChange={handleChange}
                className={errors.subject ? 'is-error' : ''}
                placeholder={t.form.subjectPh}
                disabled={status === 'sending'}
              />
              {errors.subject && <span className="contact__field-error">{errors.subject}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">{t.form.message}</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                value={data.message}
                onChange={handleChange}
                className={errors.message ? 'is-error' : ''}
                placeholder={t.form.messagePh}
                disabled={status === 'sending'}
              />
              {errors.message && <span className="contact__field-error">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className={`btn btn-primary contact__submit contact__submit--${status}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="contact__spinner" aria-hidden="true" />
                  {t.form.sending}
                </>
              ) : status === 'success' ? (
                <>
                  <Icon name="check-circle" size={18} />
                  {t.form.success}
                </>
              ) : status === 'error' ? (
                <>
                  <Icon name="exclamation-circle" size={18} />
                  {t.form.retry}
                </>
              ) : (
                <>
                  <Icon name="paper-plane" size={18} />
                  {t.form.send}
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="contact__feedback contact__feedback--ok">{t.form.feedbackOk}</p>
            )}
            {status === 'error' && (
              <p className="contact__feedback contact__feedback--err">{t.form.feedbackErr}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
