import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/MainLayout.scss";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="main-layout">
      <div className="background-video-wrapper">
        <div className="light-rays">
          <video
            src="https://videos.pexels.com/video-files/9694443/9694443-hd_1920_1080_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="background-video"
          />
        </div>
      </div>

      <Header />

      <main className="content">{children}</main>

      <Footer />
    </div>
  );
}
