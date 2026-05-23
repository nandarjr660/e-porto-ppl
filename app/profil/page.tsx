import Profile from "@/components/profile";
import LocalCulture from "@/components/local-culture";
import Footer from "@/components/footer";

export default function ProfilPage() {
  return (
    <div className="w-full">
      <Profile />
      <LocalCulture />
      <Footer variant="simple" />
    </div>
  );
}
