export interface Link {
  title: string;
  url: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatar: string;
  links: Link[];
  socials: SocialLink[];
}

const profile: Profile = {
  name: "Fachri",
  bio: "Web Developer & Creator",
  avatar: "/avatar.jpg",
  links: [
    { title: "Portfolio", url: "https://mfchmufid.my.id", icon: "globe" },
    {
      title: "Instagram",
      url: "https://instagram.com/mfchmufid",
      icon: "instagram",
    },
    { title: "TikTok", url: "https://tiktok.com/@mfchmf", icon: "tiktok" },
    {
      title: "YouTube",
      url: "https://youtube.com/@pacriover",
      icon: "youtube",
    },
    {
      title: "Contact WhatsApp",
      url: "https://wa.me/6285293467109",
      icon: "whatsapp",
    },
    { title: "Tako", url: "https://tako.id/Archielole", icon: "link" },
  ],
  socials: [
    { platform: "instagram", url: "https://instagram.com/mfchmufid" },
    { platform: "tiktok", url: "https://tiktok.com/@mfchmf" },

    { platform: "github", url: "https://github.com/fensacel" },
  ],
};

export default profile;
