import { site } from "@/src/content/site";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-16 text-sm text-ink/60 md:px-12">
      <div className="flex flex-col gap-2">
        <span>{site.name}</span>
        <span>{site.contact.email}</span>
      </div>
    </footer>
  );
}
