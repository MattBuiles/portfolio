import React, { useState, useRef } from 'react';
import Icon from './Icon';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const contactInfo = [
    {
      icon: 'envelope',
      label: 'Email',
      value: 'matebuilesd@gmail.com',
      link: 'mailto:matebuilesd@gmail.com',
      color: '#ea4335'
    },
    {
      icon: 'phone',
      label: 'Teléfono',
      value: '+57 312 239 0597',
      link: 'tel:+573122390597',
      color: '#34a853'
    },
    {
      icon: 'map-marker-alt',
      label: 'Ubicación',
      value: 'Medellín, Colombia',
      link: 'https://maps.google.com/?q=Medellín,Colombia',
      color: '#4285f4'
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: '/in/mateobuiles',
      link: 'https://linkedin.com/in/mateo-builes-73453531b',
      color: '#0077b5'
    }
  ];

  const socialLinks = [
    {
      icon: 'github',
      name: 'GitHub',
      url: 'https://github.com/MattBuiles',
      color: '#333'
    },
    {
      icon: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mateo-builes-73453531b',
      color: '#0077b5'
    },
    {
      icon: 'twitter',
      name: 'X',
      url: 'https://x.com/MateB53',
      color: '#1da1f2'
    },
    {
      icon: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com/mateb53',
      color: '#e4405f'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'El asunto debe tener al menos 5 caracteres';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus('sending');

    try {
      // Simular envío de formulario (aquí integrarías con tu backend o servicio de email)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Resetear estado después de 3 segundos
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);

    } catch (error) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const handleContactClick = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">¡Conectemos!</h2>
        <p className="section-description animate-fade-in-up">
          ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría escuchar de ti.
          Estoy siempre abierto a nuevas oportunidades y desafíos interesantes.
        </p>

        <div className="contact-content">
          {/* Información de Contacto */}
          <div className="contact-info animate-fade-in-left">
            <div className="info-header">
              <h3>Información de Contacto</h3>
              <p>No dudes en contactarme a través de cualquiera de estos medios</p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="contact-method"
                  onClick={() => handleContactClick(info.link)}
                  style={{ '--contact-color': info.color }}
                >
                  <div className="method-icon">
                    <Icon name={info.icon} />
                  </div>
                  <div className="method-content">
                    <span className="method-label">{info.label}</span>
                    <span className="method-value">{info.value}</span>
                  </div>
                  <Icon name="external-link" className="external-icon" />
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Sígueme en Redes Sociales</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    title={social.name}
                  >
                    <Icon name={social.icon} />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Disponible para proyectos</span>
              </div>
              <p>Actualmente acepto nuevos proyectos y oportunidades laborales</p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="contact-form-container animate-fade-in-right">
            <div className="form-header">
              <h3>Envíame un Mensaje</h3>
              <p>Completa el formulario y te responderé lo antes posible</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <Icon name="user" />
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Tu nombre completo"
                    disabled={formStatus === 'sending'}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <Icon name="envelope" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="tu@email.com"
                    disabled={formStatus === 'sending'}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <Icon name="tag" />
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                  placeholder="¿De qué quieres hablar?"
                  disabled={formStatus === 'sending'}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <Icon name="comment" />
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Cuéntame sobre tu proyecto, idea o cualquier cosa que quieras compartir..."
                  rows="6"
                  disabled={formStatus === 'sending'}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${formStatus}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' && (
                  <div className="spinner"></div>
                )}
                {formStatus === 'idle' && (
                  <>
                    <Icon name="paper-plane" />
                    Enviar Mensaje
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <Icon name="check-circle" />
                    ¡Enviado Exitosamente!
                  </>
                )}
                {formStatus === 'error' && (
                  <>
                    <Icon name="exclamation-circle" />
                    Error al Enviar
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="form-message success">
                  <Icon name="check-circle" />
                  <div>
                    <strong>¡Mensaje enviado!</strong>
                    <p>Gracias por contactarme. Te responderé pronto.</p>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-message error">
                  <Icon name="exclamation-triangle" />
                  <div>
                    <strong>Error al enviar</strong>
                    <p>Por favor intenta nuevamente o contáctame directamente.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta animate-fade-in-up">
          <div className="cta-content">
            <Icon name="rocket" className="cta-icon" />
            <h3>¿Listo para comenzar un proyecto juntos?</h3>
            <p>Ya sea que tengas una idea clara o simplemente quieras explorar posibilidades, estoy aquí para ayudarte a convertir tu visión en realidad.</p>
            <div className="cta-stats">
              <div className="stat">
                <strong>24h</strong>
                <span>Tiempo de respuesta</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Satisfacción del cliente</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Disponibilidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
