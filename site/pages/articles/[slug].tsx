import Link from 'next/link';
import { sc } from '../../lib/sanity';
import { allArticles, articleBySlug } from '../../queries';

function SingleArticle({ article }) {
  console.log(article);
  return (
    <>
      <h2>Single article</h2>
    </>
  );
}

async function getStaticProps({ params }) {
  const article = await sc.fetch(articleBySlug, { slug: params.slug });

  return {
    props: {
      article,
    },
  };
}

async function getStaticPaths() {
  const articles = await sc.fetch(allArticles);
  const paths = articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }));

  return { paths, fallback: false };
}

export default SingleArticle;
export { getStaticProps, getStaticPaths };
