import profile from "./data/profile";
import HomeClient from "./components/HomeClient";

export default function Home() {
  return <HomeClient fallback={profile} />;
}
