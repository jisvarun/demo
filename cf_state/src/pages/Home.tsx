import {
  ArrowRight,
  Heart,
  GraduationCap,
  Stethoscope,
  Users,
  Leaf,
  HandHeart,
  MapPin,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

const focusAreas = [
  {
    title: "Education",
    description:
      "Creating better educational opportunities for children and young people from underserved communities.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    description:
      "Supporting access to essential healthcare, medical awareness and healthy living.",
    icon: Stethoscope,
  },
  {
    title: "Women Empowerment",
    description:
      "Helping women build skills, confidence and opportunities for a financially independent future.",
    icon: Users,
  },
  {
    title: "Environment",
    description:
      "Working with communities to protect nature and build a cleaner and sustainable future.",
    icon: Leaf,
  },
];

const campaigns = [
  {
    title: "Education for Every Child",
    category: "Education",
    description:
      "Help provide educational resources, school supplies and learning opportunities to children in need.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    raised: "₹7,50,000",
    goal: "₹10,00,000",
    progress: 75,
  },
  {
    title: "Healthy Communities",
    category: "Healthcare",
    description:
      "Supporting healthcare camps and awareness programs for underserved communities.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    raised: "₹5,20,000",
    goal: "₹8,00,000",
    progress: 65,
  },
  {
    title: "Empower Her",
    category: "Women Empowerment",
    description:
      "Supporting women with vocational training, skills development and livelihood opportunities.",
    image:
      "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=900&q=80",
    raised: "₹3,60,000",
    goal: "₹5,00,000",
    progress: 72,
  },
];

const events = [
  {
    title: "Free Health Checkup Camp",
    date: "12 Oct 2026",
    location: "Ranchi, Jharkhand",
  },
  {
    title: "Community Education Drive",
    date: "20 Oct 2026",
    location: "Hazaribagh, Jharkhand",
  },
  {
    title: "Tree Plantation Campaign",
    date: "02 Nov 2026",
    location: "Ranchi, Jharkhand",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-green-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=85"
            alt="Children smiling together"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-green-950/75" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-green-100 backdrop-blur-sm">
              <Heart size={16} fill="currentColor" />
              Together We Can Make a Difference
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Creating Hope.
              <span className="block text-green-400">
                Changing Lives.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              We work with communities to create meaningful and
              sustainable change through education, healthcare,
              empowerment and humanitarian support.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 font-semibold text-white transition hover:bg-green-400"
              >
                <Heart size={18} fill="currentColor" />
                Donate Now
              </Link>

              <Link
                to="/our-work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-green-900"
              >
                Explore Our Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT STATS
      ====================================================== */}
      <section className="relative -mt-10 px-4">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["25K+", "People Helped"],
            ["120+", "Villages Reached"],
            ["850+", "Volunteers"],
            ["75+", "Projects Completed"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b border-gray-100 px-6 py-7 text-center last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
            >
              <h3 className="text-3xl font-bold text-green-600">
                {value}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          ABOUT SECTION
      ====================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=85"
              alt="Community volunteers working together"
              className="h-[450px] w-full rounded-3xl object-cover"
            />

            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-green-600 p-6 text-white shadow-xl sm:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm text-green-100">
                Years of Service
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Small Actions Can Create Big Change
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Hope Foundation is a community-focused organization
              working to improve lives and create opportunities for
              people who need them most.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Through partnerships, volunteers and community-led
              initiatives, we focus on creating solutions that are
              practical, inclusive and sustainable.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-green-600 transition hover:text-green-700"
            >
              Learn More About Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOCUS AREAS
      ====================================================== */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
              What We Do
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Focus Areas
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We work across different areas to build healthier,
              stronger and more empowered communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {area.description}
                  </p>

                  <Link
                    to="/our-work"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-600"
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAMPAIGNS
      ====================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Make an Impact
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Active Campaigns
              </h2>
            </div>

            <Link
              to="/campaigns"
              className="inline-flex items-center gap-2 font-semibold text-green-600"
            >
              View All Campaigns
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {campaigns.map((campaign) => (
              <article
                key={campaign.title}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-700 shadow">
                    {campaign.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {campaign.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {campaign.description}
                  </p>

                  <div className="mt-6">
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-semibold text-gray-900">
                        {campaign.raised}
                      </span>

                      <span className="text-gray-500">
                        Goal: {campaign.goal}
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-green-500"
                        style={{
                          width: `${campaign.progress}%`,
                        }}
                      />
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                      {campaign.progress}% funded
                    </p>
                  </div>

                  <Link
                    to="/donate"
                    className="mt-6 flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    Support This Campaign
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SUCCESS STORY
      ====================================================== */}
      <section className="bg-green-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-green-400">
              Success Story
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Every Life We Touch Matters
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              From providing school supplies to supporting families
              with healthcare and livelihood opportunities, our work
              is driven by the belief that every person deserves a
              chance to build a better future.
            </p>

            <blockquote className="mt-8 border-l-4 border-green-500 pl-5 text-lg italic leading-8 text-green-100">
              "When communities come together, change becomes
              possible."
            </blockquote>

            <Link
              to="/success-stories"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-green-900 transition hover:bg-green-50"
            >
              Read More Stories
              <ArrowRight size={17} />
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85"
              alt="Volunteers helping the community"
              className="h-[420px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          EVENTS
      ====================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Join Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <CalendarDays size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {event.title}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays size={14} />
                      {event.date}
                    </p>

                    <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin size={14} />
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-semibold text-green-600"
            >
              View All Events
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          VOLUNTEER CTA
      ====================================================== */}
      <section className="px-4 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-green-600">
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <HandHeart
                size={42}
                className="text-green-100"
              />

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Be the Change You Want to See
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-green-50">
                Whether you volunteer your time, skills or resources,
                your contribution can help create meaningful change.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/volunteers"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50"
                >
                  Become a Volunteer
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  <Heart size={17} />
                  Donate
                </Link>
              </div>
            </div>

            <div className="hidden h-full min-h-[360px] lg:block">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85"
                alt="Volunteers making a difference"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}