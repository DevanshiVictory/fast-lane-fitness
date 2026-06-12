'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
  </svg>
);

// All images from Pexels — reliable, no auth, works in browser
// next.config.ts must have images.pexels.com in remotePatterns (see next.config.ts)
const IMGS = {
  hero:      'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920',
  about:     'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1200',
  equipment: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1200',
  g1:        'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=1200',
  g2:        'https://images.pexels.com/photos/416784/pexels-photo-416784.jpeg?auto=compress&cs=tinysrgb&w=900',
  g3:        'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=900',
  g4:        'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=900',
  g5:        'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=900',
};

const stats = [
  { label: 'Open', value: '24/7' },
  { label: 'Rating', value: '4.9★' },
  { label: 'Location', value: 'Stilwell, OK' },
];

const features = [
  {
    title: '24/7 Access',
    desc: 'Train on your schedule — early mornings, late nights, weekends. The door is always open.',
    icon: '⏱',
  },
  {
    title: 'Strength Training',
    desc: 'Squat racks, bench press stations, and a full free weight floor built for serious lifters.',
    icon: '🏋️',
  },
  {
    title: 'Cardio Equipment',
    desc: 'Treadmills, ellipticals, and bikes — everything you need for conditioning work.',
    icon: '🔥',
  },
  {
    title: 'Clean Facility',
    desc: 'A well-maintained space members take pride in. Clean equipment, clean floors, every time.',
    icon: '✦',
  },
  {
    title: 'Community Feel',
    desc: 'Locally owned and community driven. Our members push each other toward real results.',
    icon: '🤝',
  },
  {
    title: 'Friendly Staff',
    desc: 'Ownership that knows your name and genuinely cares about your progress.',
    icon: '👋',
  },
];

const equipment = [
  'Treadmills & Ellipticals',
  'Squat Racks',
  'Bench Press Stations',
  'Dumbbells (full set)',
  'Cable Machines',
  'Functional Training Area',
  'Leg Press & Machines',
];

const testimonials = [
  {
    quote: 'Always clean and has great employees and ownership. This gym is a hidden gem in Stilwell.',
    author: 'Jamie R.',
    tag: 'Member since 2022',
  },
  {
    quote: 'I come in 5 days a week. The 24-hour access fits my schedule perfectly — no excuses anymore.',
    author: 'Taylor S.',
    tag: 'Busy Professional',
  },
  {
    quote: "The owners truly care about the well-being of our community. It shows in everything they do.",
    author: 'Mia G.',
    tag: 'Neighborhood Athlete',
  },
];

const galleryImages = [
  { src: IMGS.g1, alt: 'Gym training floor', wide: true },
  { src: IMGS.g2, alt: 'Cardio equipment',   wide: false },
  { src: IMGS.g3, alt: 'Bench press',         wide: false },
  { src: IMGS.g4, alt: 'Weight training',     wide: false },
  { src: IMGS.g5, alt: 'Cable machines',      wide: false },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090c10] text-slate-100">

      {/* ─── NAV ─── */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#090c10]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <span className="text-base font-bold uppercase tracking-[0.3em] text-[#11B6FF]">Fast Lane Fitness</span>
            <p className="text-[11px] tracking-widest text-slate-500 uppercase">Stilwell, Oklahoma</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm md:flex text-slate-400">
            <a href="#about"     className="transition hover:text-white">About</a>
            <a href="#equipment" className="transition hover:text-white">Equipment</a>
            <a href="#gallery"   className="transition hover:text-white">Gallery</a>
            <a href="#contact"   className="transition hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden gap-2 md:flex">
              <a
                href="https://www.facebook.com/p/Fast-Lane-Fitness-100063559541757/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-[#11B6FF]"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/explore/locations/144269016220435/fast-lane-fitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-[#11B6FF]"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
            <div className="h-6 w-px bg-white/10 hidden md:block" />
            <a
              href="https://fastlanefitness-onlinebooking.setmore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#11B6FF] px-5 py-2 text-sm font-bold uppercase tracking-[0.15em] text-[#11B6FF] transition hover:bg-[#11B6FF]/10"
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[#11B6FF] px-5 py-2 text-sm font-bold uppercase tracking-[0.15em] text-slate-950 transition hover:bg-[#11B6FF]/80"
            >
              Join Today
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Real background photo */}
        <div className="absolute inset-0">
          <Image
            src={IMGS.hero}
            alt="Fast Lane Fitness gym floor"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090c10] via-[#090c10]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-transparent" />
        </div>

        {/* Blue glow */}
        <div className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#11B6FF]/10 blur-[140px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-32 md:px-10 md:py-44">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl space-y-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#11B6FF]/30 bg-[#11B6FF]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#11B6FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#11B6FF] animate-pulse" />
              Open 24 Hours · Stilwell, OK
            </span>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Train Hard.<br />
              <span className="text-[#11B6FF]">Live Strong.</span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Fast Lane Fitness is Stilwell's home gym — open around the clock, built for every level, and owned by people who actually care about this community.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-[#11B6FF] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(17,182,255,0.35)] transition hover:scale-[1.03]"
              >
                Explore The Gym
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#11B6FF]/50 hover:text-[#11B6FF]"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 pt-4">
              {stats.map(({ label, value }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">{label}</p>
                  <p className="mt-1 text-2xl font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#11B6FF]">Locally Owned · Community Driven</p>
              <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                Built for Stilwell.<br />Built for You.
              </h2>
              <p className="text-base leading-8 text-slate-400">
                Fast Lane Fitness isn't a chain. It's a gym owned and run by people in this community, for this community. We built a space where beginners feel welcome, athletes push limits, and families build healthy habits — without pretense.
              </p>
              <p className="text-base leading-8 text-slate-400">
                Clean equipment. Friendly faces. A facility you're proud to call your gym.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {['Friendly ownership', 'Cleaned daily', 'No judgment culture', 'Real community'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-[#11B6FF]">✦</span> {tag}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#11B6FF]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={IMGS.about}
                    alt="Fast Lane Fitness interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090c10] to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-md">
                    <p className="text-sm font-medium text-white">A clean, premium space — open every hour of every day.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="border-t border-white/8 bg-[#0d1117] py-24 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#11B6FF]">Why Fast Lane</p>
            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">Everything you need. Nothing you don't.</h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group rounded-[1.75rem] border border-white/8 bg-white/4 p-7 transition hover:border-[#11B6FF]/30 hover:bg-white/7"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#11B6FF]/10 text-xl">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EQUIPMENT ─── */}
      <section id="equipment" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Image left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#11B6FF]/8 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={IMGS.equipment}
                    alt="Fast Lane Fitness equipment — squat rack"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090c10] to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-md">
                    <p className="text-sm font-medium text-white">Premium machines, heavy lifting systems, and functional training.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#11B6FF]">Equipment</p>
              <h2 className="text-4xl font-black text-white sm:text-5xl">Elite gear for every routine.</h2>
              <p className="text-base leading-8 text-slate-400">
                Whether you're chasing a personal record or just starting out, our equipment floor has everything you need to build strength, improve cardio, and stay consistent.
              </p>
              <div className="grid gap-3 pt-2">
                {equipment.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/4 px-5 py-3.5"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#11B6FF]" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="gallery" className="border-t border-white/8 bg-[#0d1117] py-24 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#11B6FF]">Gallery</p>
            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">See the space.</h2>
          </motion.div>

          {/* Masonry grid: first image spans 2 columns + 2 rows on desktop */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {galleryImages.map(({ src, alt, wide }, i) => (
              <motion.div
                key={alt}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.015 }}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 ${
                  wide ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className={`relative ${wide ? 'aspect-[16/10]' : 'aspect-square'}`}>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                    sizes={wide ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090c10]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  <p className="absolute bottom-4 left-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition duration-300">
                    {alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#11B6FF]">What Members Say</p>
            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">Real people. Real results.</h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map(({ quote, author, tag }, i) => (
              <motion.div
                key={author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/4 p-8"
              >
                <p className="text-lg leading-8 text-slate-200">"{quote}"</p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#11B6FF]/20 text-sm font-bold text-[#11B6FF]">
                    {author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{author}</p>
                    <p className="text-xs text-slate-500">{tag}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="border-t border-white/8 bg-[#0d1117] py-24 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl shadow-[#11B6FF]/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.2890649838327!2d-94.6437905!3d35.8263735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ca270a1628094f%3A0x6066a3d67e552b7e!2sFast%20Lane%20Fitness!5e0!3m2!1sen!2sus!4v1718073600000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-[2.25rem]"
            />
          </motion.div>

          {/* Contact Info */}
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090c10]">
            <div className="h-1 w-full bg-gradient-to-r from-[#11B6FF]/0 via-[#11B6FF] to-[#11B6FF]/0" />
            <div className="grid gap-12 p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-16">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#11B6FF]">Come Train With Us</p>
                <h2 className="text-4xl font-black text-white sm:text-5xl">Ready to start?</h2>
                <p className="max-w-lg text-base leading-8 text-slate-400">
                  Stop by Fast Lane Fitness any time — day or night. We're at 319 N 2nd St in Stilwell. No appointment needed, no judgment. Just show up and get after it.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+19186964043"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#11B6FF] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_40px_rgba(17,182,255,0.3)] transition hover:scale-[1.03]"
                  >
                    📞 Call Us Now
                  </a>
                  <a
                    href="https://fastlanefitness-onlinebooking.setmore.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#11B6FF] bg-[#11B6FF]/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#11B6FF] transition hover:bg-[#11B6FF]/20"
                  >
                    📅 Book Online
                  </a>
                </div>
              </div>

              <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/4 p-7">
                {[
                  { label: 'Address', value: '319 N 2nd St, Stilwell, OK 74960', href: undefined },
                  { label: 'Phone',   value: '+1 918-696-4043',                  href: 'tel:+19186964043' },
                  { label: 'Hours',   value: 'Open 24 Hours, Every Day',         href: undefined },
                ].map(({ label, value, href }) => (
                  <div key={label} className="border-b border-white/8 pb-4 last:border-0 last:pb-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1.5 block text-lg font-bold text-[#11B6FF] hover:underline">{value}</a>
                    ) : (
                      <p className="mt-1.5 text-lg font-bold text-white">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/8 px-6 py-8 text-sm text-slate-600 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p>© {new Date().getFullYear()} Fast Lane Fitness · Stilwell, Oklahoma</p>
              <p>Built for the community. Open for everyone.</p>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/p/Fast-Lane-Fitness-100063559541757/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 transition hover:border-[#11B6FF] hover:text-[#11B6FF]"
                title="Follow on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/explore/locations/144269016220435/fast-lane-fitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 transition hover:border-[#11B6FF] hover:text-[#11B6FF]"
                title="Follow on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}