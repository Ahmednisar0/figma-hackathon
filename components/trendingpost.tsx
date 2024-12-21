import Image from "next/image";
import { PiCaretRightBold } from "react-icons/pi"; // Use the right-facing caret icon

export default function Posts() {
  const posts = [
    {
      image: "/images/post1.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "/images/post2.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "/images/post3.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 absolute top-[4530px]">
      {/* Header Section */}
      <div className="text-center lg:ml-[195px]  mb-12">
        <p className="text-blue-500 text-sm font-semibold uppercase">
          Practice Advice
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Featured Posts
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Posts Section */}
      <div className="grid grid-cols-1 ml-[195px]   sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden h-[606px]"
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={`Post titled ${post.title}`}
                width={348}
                height={300}
                className="w-full h-auto object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                New
              </span>
            </div>
            <div className="p-6">
              {/* Google Trending Text */}
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-500">Google</p>
                <p className="text-sm text-blue-500">Trending</p>
              </div>
              {/* Post Title */}
              <h3
                className="mt-4 text-lg font-semibold text-gray-900"
                style={{
                  width: "247px",
                  height: "60px",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "0.2px",
                }}
              >
                {post.title}
              </h3>
              {/* Description Paragraph */}
              <p
                className="mt-2 text-sm text-gray-500"
                style={{
                  width: "280px",
                  height: "60px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.2px",
                }}
              >
                {post.description}
              </p>
              {/* Footer Section with Date, Comments, and Learn More */}
              <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                {/* Date with Clock Icon */}
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                  </svg>
                  <span>{post.date}</span>
                </div>
                {/* Comments with an Icon */}
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M18 4a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4zm-2 0v12H4V4h12z" />
                  </svg>
                  <span>{post.comments}</span>
                </div>
              </div>
              {/* Learn More with PiCaretRightBold Icon */}
              <div className="mt-2">
                <a
                  href="#"
                  className="text-blue-500 font-semibold hover:underline flex items-center"
                >
                  Learn More <PiCaretRightBold className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

