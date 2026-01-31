import { useBlogPosts } from "@/hooks/useBlogPosts";
import { DEFAULT_DATE_TIME_FORMAT } from "@/lib/constants/constants";
import { blogs } from "@/lib/constants/SocialConstants";
import dayjs from "dayjs";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share2,
  ShieldHalf,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";

const SafariBrowser = () => {
  const { posts } = useBlogPosts();

  return (
    <>
      <div className="window-header safari-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share2 className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog w-screen h-120 overflow-y-auto scrollbar-hide">
        <h2>Top Places where I write Blogs:</h2>
        <div className="flex flex-row justify-start items-center mb-4 gap-4">
          <Link
            href={blogs[0].link!}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src={"/icons/dev.to.svg"}
              alt="Dev.to"
              width={100}
              height={100}
              className="size-24"
            />
          </Link>
        </div>
        <h2>Recent Blogs 👇</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="blog-post">
              <div className="col-span-2">
                <Image
                  src={post.cover_image!}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="border shadow-lg"
                />
              </div>
              <div className="content">
                <p className="font-semibold">
                  {dayjs(post.published_at).format(DEFAULT_DATE_TIME_FORMAT)}
                </p>
                <h3 className="text-lg">{post.title}</h3>
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base"
                >
                  Check out the full post
                  <MoveRight className="icon-hover" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(SafariBrowser, "safari");

export default SafariWindow;
