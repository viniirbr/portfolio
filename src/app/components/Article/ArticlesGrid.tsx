import { Grid } from "../UI/Grid";
import { Article } from "@/types/Article";
import { ArticleItem } from "./ArticleItem";
import { getArticles } from "@/base/sanity/sanity-utils";

export async function ArticlesGrid() {
  const articles = await getArticles();

  return (
    <section className="">
      <Grid>
        {articles.map((article) => {
          return <ArticleItem key={article.title} article={article} />;
        })}
      </Grid>
    </section>
  );
}
