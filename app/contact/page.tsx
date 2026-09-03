import Contact from "@/components/Contact";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Contact | Abdelrahman Mahmoud",
  description: "Get in touch with Abdelrahman Mahmoud for AI/ML engineering projects and collaborations.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  );
}
