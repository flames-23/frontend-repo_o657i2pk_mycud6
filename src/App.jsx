import { useEffect, useMemo, useState } from 'react'

function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Logo j’ecolomise">
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#g)" />
        <path d="M15 30c3 4 9 4 12-1 3-5 1-11-4-14" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="18" r="2" fill="#fff" />
      </svg>
      <span className="text-xl font-semibold tracking-tight text-gray-900">j’ecolomise</span>
    </div>
  )
}

function Header() {
  const nav = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#marques', label: 'Marques' },
    { href: '#zone', label: 'Zone' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-gray-900 transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="md:inline-flex hidden bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm">Devis gratuit</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gray-100 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Réparation, entretien et installation de matériel de fitness à domicile – Strasbourg et alentours
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Technicien certifié pour tapis de course, vélos, rameurs, elliptiques, steppers et appareils de musculation. Intervention rapide dans le Bas-Rhin avec diagnostic et devis gratuit.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-md shadow">
                Demander une intervention
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                Voir les services
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><CheckIcon /> Déplacement dans un rayon de 50 km</li>
              <li className="flex items-center gap-2"><CheckIcon /> Intervention rapide et fiable</li>
              <li className="flex items-center gap-2"><CheckIcon /> Pièces d’origine ou compatibles</li>
              <li className="flex items-center gap-2"><CheckIcon /> Devis et diagnostic gratuits</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://source.unsplash.com/1200x900/?treadmill,repair,technician"
                alt="Technicien réparant un tapis de course à domicile"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <p className="sr-only">Spécialiste en réparation de matériel de sport à domicile à Strasbourg.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414l2.793 2.793 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function Services() {
  const services = [
    {
      title: 'Réparation & dépannage',
      desc: 'Diagnostic précis, remplacement de pièces, remise en service de vos appareils.',
      img: 'https://source.unsplash.com/800x600/?treadmill,repair',
      alt: 'Réparation d’un tapis de course par un technicien',
    },
    {
      title: 'Entretien préventif',
      desc: 'Nettoyage, lubrification, réglages et contrôle de sécurité pour prolonger la durée de vie.',
      img: 'https://source.unsplash.com/800x600/?elliptical,maintenance',
      alt: 'Entretien d’un vélo elliptique et contrôle de sécurité',
    },
    {
      title: 'Installation & réglage',
      desc: 'Montage à domicile, mise à niveau, calibration et tests fonctionnels.',
      img: 'https://source.unsplash.com/800x600/?rowing-machine,assembly',
      alt: 'Installation et réglage d’un rameur à domicile',
    },
    {
      title: 'Pièces détachées',
      desc: 'Fourniture et pose de courroies, moteurs, consoles, capteurs et autres composants.',
      img: 'https://source.unsplash.com/800x600/?gym,spare,parts,tools',
      alt: 'Pièces détachées et outillage pour appareils de fitness',
    },
  ]
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Services</h2>
        <p className="mt-2 text-gray-600">Interventions sur tapis de course, vélos d’appartement, rameurs, elliptiques, steppers, bancs de musculation, etc.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group rounded-lg border border-gray-100 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Marques() {
  const brands = [
    'Kettler','NordicTrack','Proform','BH Fitness','Domyos','Care','Technogym','Hammer','Concept2','Reebok','Weslo','Horizon Fitness','Spirit','Matrix','Schwinn','Bodytone','Life Fitness','DKN','et bien d’autres'
  ]
  return (
    <section id="marques" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Marques supportées</h2>
        <p className="mt-2 text-gray-600">Spécialiste agréé ou expérimenté sur un large éventail d’appareils.</p>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {brands.map((b) => (
            <li key={b} className="text-sm text-gray-800 bg-white border border-gray-100 rounded-md px-3 py-2 text-center shadow-sm">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Zone() {
  const cities = [
    'Strasbourg','Haguenau','Saverne','Obernai','Molsheim','Sélestat','Erstein','Illkirch-Graffenstaden','Schiltigheim','Bischwiller','Lingolsheim','Brumath','Barr','Geispolsheim','et environs'
  ]
  return (
    <section id="zone" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Zone d’intervention</h2>
        <p className="mt-2 text-gray-600">Déplacement dans un rayon d’environ 50 km autour de Strasbourg (Bas-Rhin, Alsace, France).</p>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900">Villes desservies</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {cities.map((c) => (
                <li key={c} className="flex items-center gap-2"><PinIcon /> {c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center relative">
              <svg viewBox="0 0 400 300" className="w-full h-full" role="img" aria-label="Carte stylisée de la zone autour de Strasbourg">
                <defs>
                  <linearGradient id="m" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e5f9f3"/>
                    <stop offset="100%" stopColor="#f0fdf4"/>
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#m)"/>
                <circle cx="210" cy="150" r="70" fill="#A7F3D0" opacity="0.6"/>
                <circle cx="210" cy="150" r="110" fill="#D1FAE5" opacity="0.5"/>
                <g>
                  <circle cx="210" cy="150" r="6" fill="#059669"/>
                  <text x="220" y="155" fontSize="14" fill="#065F46">Strasbourg</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PinIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  )
}

function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', tel: '', marque: '', description: '' })
  const mailto = useMemo(() => {
    const to = 'caelus@orange.fr'
    const subject = encodeURIComponent('Demande d\'intervention – site j’ecolomise')
    const body = encodeURIComponent(
      `Nom: ${form.nom}\nEmail: ${form.email}\nTéléphone: ${form.tel}\nMarque: ${form.marque}\n\nDescription du problème:\n${form.description}`
    )
    return `mailto:${to}?subject=${subject}&body=${body}`
  }, [form])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Redirection mailto
    window.location.href = mailto
  }

  return (
    <section id="contact" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact & devis gratuit</h2>
        <p className="mt-2 text-gray-600">Remplissez le formulaire ci-dessous. Réponse rapide par email ou téléphone.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input required type="text" value={form.nom} onChange={(e)=>setForm({...form, nom:e.target.value})} className="mt-1 w-full border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="vous@exemple.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                  <input required type="tel" value={form.tel} onChange={(e)=>setForm({...form, tel:e.target.value})} className="mt-1 w-full border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="06 12 34 56 78" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Marque de l’appareil</label>
                  <input type="text" value={form.marque} onChange={(e)=>setForm({...form, marque:e.target.value})} className="mt-1 w-full border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="Ex. NordicTrack, Domyos…" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Description du problème</label>
                  <textarea required rows={5} value={form.description} onChange={(e)=>setForm({...form, description:e.target.value})} className="mt-1 w-full border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="Décrivez la panne, les symptômes, les messages d’erreur…" />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-md shadow">Envoyer la demande</button>
                <a href={mailto} className="text-sm text-emerald-700 hover:text-emerald-800 underline">Ou ouvrir votre messagerie</a>
              </div>
            </form>
          </div>
          <aside className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">Coordonnées</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-1">
                <li><strong>Entreprise:</strong> j’ecolomise</li>
                <li><strong>Propriétaire:</strong> Olivier CAEL</li>
                <li><strong>Email:</strong> <a className="text-emerald-700 hover:text-emerald-800 underline" href="mailto:caelus@orange.fr">caelus@orange.fr</a></li>
                <li><strong>Zone:</strong> 50 km autour de Strasbourg</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">Avantages</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><CheckIcon /> Service local et réactif</li>
                <li className="flex items-start gap-2"><CheckIcon /> Réparer plutôt que remplacer</li>
                <li className="flex items-start gap-2"><CheckIcon /> Connaissance approfondie des appareils</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Mentions() {
  return (
    <section id="mentions" className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-sm text-gray-600">
        <h2 className="text-lg font-semibold text-gray-900">Mentions légales & conditions d’intervention</h2>
        <p className="mt-3">Entreprise individuelle « j’ecolomise » – Propriétaire : Olivier CAEL. Contact : <a href="mailto:caelus@orange.fr" className="underline text-emerald-700">caelus@orange.fr</a>. Zone d’intervention : Bas-Rhin (67) et environs de Strasbourg.</p>
        <p className="mt-2">Devis gratuit sur demande. Les tarifs d’intervention sont communiqués avant déplacement. Toute intervention est réalisée dans le respect des règles de sécurité, avec pièces d’origine ou compatibles selon disponibilité. Garantie légale sur les pièces posées conformément aux conditions du fabricant.</p>
        <p className="mt-2">Les marques citées (Kettler, NordicTrack, Proform, etc.) appartiennent à leurs propriétaires respectifs. j’ecolomise intervient en tant que technicien indépendant.</p>
      </div>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
  }, [])
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Marques />
        <Zone />
        <Contact />
        <Mentions />
      </main>
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <Logo className="opacity-80" />
          <p>© {new Date().getFullYear()} j’ecolomise — Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
