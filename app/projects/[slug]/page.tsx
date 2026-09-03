import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Play } from "lucide-react";
import { projects } from "@/content/site";
import Tag from "@/components/ui/Tag";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((p) => p.slug === params.slug);
  if (!p) return {};
  return { title: `${p.title} | Abdelrahman Mahmoud`, description: p.description };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Back */}
        <Link href="/#projects"
          className="inline-flex items-center gap-2 text-muted hover:text-accent text-sm mb-10 group transition-colors">
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero image */}
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-10 border border-white/[0.07]">
          <Image src={project.image} alt={project.title} fill sizes="1200px" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 to-transparent" />
          {/* Tags overlay */}
          <div className="absolute bottom-5 left-6 flex flex-wrap gap-2">
            {project.tags.map((t) => <Tag key={t} variant="accent">{t}</Tag>)}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight mb-3">{project.title}</h1>
              <p className="text-accent text-lg font-medium">{project.description}</p>
            </div>

            <div className="h-px bg-gradient-to-r from-accent/30 to-transparent" />

            <div>
              <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">{"// Project Overview"}</p>
              <p className="text-muted text-base leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <div className="h-px bg-gradient-to-r from-accent/20 to-transparent mb-8" />
                <p className="text-accent font-mono text-xs uppercase tracking-widest mb-5">{"// Screenshots & Results"}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <div key={i} className="relative h-48 rounded-xl overflow-hidden border border-white/[0.07]">
                      <Image src={src} alt={`Screenshot ${i + 1}`} fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Key Highlights */}
            <div className="card card-gradient-border p-6">
              <p className="text-accent font-mono text-xs uppercase tracking-widest mb-5">{"// Key Highlights"}</p>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-muted text-sm">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="card card-gradient-border p-6 space-y-3">
              <p className="text-muted font-mono text-xs uppercase tracking-widest mb-2">Links</p>

              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-accent/40 text-accent text-sm font-semibold hover:bg-accent/8 hover:shadow-glow-accent transition-all">
                {project.linkLabel === "GitHub" ? <Github size={16} /> : <ExternalLink size={16} />}
                View on {project.linkLabel}
              </a>

              {project.demoLink && project.demoLink !== "#" && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-accent-2/40 text-accent-2 text-sm font-semibold hover:bg-accent-2/8 transition-all">
                  <Play size={16} />
                  View Demo
                </a>
              )}

              {project.demoLink === "#" && (
                <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 text-muted/50 text-sm cursor-not-allowed">
                  <Play size={16} />
                  Demo Coming Soon
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-12" />
            <h2 className="text-2xl font-display font-bold text-white mb-8">Other Projects</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/projects/${rp.slug}`}
                  className="card card-gradient-border group p-5 hover:border-accent/25 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {rp.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-accent/20 text-accent/70">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-accent transition-colors">{rp.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
