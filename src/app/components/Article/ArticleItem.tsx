import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/Article";
import { Item } from "../UI/Item";
import { Keyword } from "../UI/Keyword";
import { PortableText } from "@portabletext/react";

interface Props {
  article: Article;
}

export function ArticleItem({ article }: Props) {
  const plainText = article.content
    .map((block) => (block.children as any)[0].text)
    .join("") as string;

  return (
    <Item
      href={`articles/${article.slug}`}
      imageAlt={article.alt || ""}
      title={article.title}
      imageSrc={article.image}
    >
      <p>
        {plainText.slice(0, 200)}...{" "}
        <b className="text-blue-500">[Read more]</b>
      </p>
      <section className="flex items-center">
        {article.keywords.map((keyword, id) => (
          <Keyword text={keyword} key={id} />
        ))}
      </section>
    </Item>
  );
}
