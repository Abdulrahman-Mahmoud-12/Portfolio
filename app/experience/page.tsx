import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Experience | Abdelrahman Mahmoud",
  description: "Work experience, certifications, education, and achievements.",
};

export default function ExperiencePage() {
  return (
    <PageLayout>
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
    </PageLayout>
  );
}
