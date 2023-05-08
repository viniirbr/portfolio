import { BackIcon } from "@/app/components/UI/BackIcon";
import { Keyword } from "@/app/components/UI/Keyword";
import { getArticleBySlug } from "@/base/sanity/sanity-utils";
import { getTimeSincePosted } from "@/utils/getTimeSincePosted";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};
export default async function Article({ params }: Props) {
  const article = await getArticleBySlug(params.id);

  return (
    <main className="flex min-h-screen flex-col gap-14 py-20 px-4">
      <BackIcon href="" className="absolute top-6 left-2 font-extrabold" />
      <header className="flex gap-1 sm:gap-0 items-start flex-col">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-orange-400 to-white bg-clip-text text-transparent">
          {article.title}
        </h1>
        <h4 className="text-white font-light">
          {getTimeSincePosted(article._createdAt)}
        </h4>
      </header>
      <Image
        src={article.image}
        alt={article.alt}
        width={500}
        height={0}
        className="rounded-md w-full max-w-lg self-center sm:w-3/4"
      />
      <div className="text-white text-justify">
        <PortableText value={article.content} />
      </div>
      <section className="flex items-center">
        {article.keywords.map((keyword, id) => (
          <Keyword text={keyword} key={id} />
        ))}
      </section>
    </main>
  );
}
