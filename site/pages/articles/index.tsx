import Link from 'next/link';
import { sc, urlFor } from '../../lib/sanity';
import { allArticles } from '../../queries';

function Articles({ articles }) {
  return (
    <>
      <h2>The articles:</h2>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            <img src={urlFor(article.author.image).width(128).url()} />
          </li>
        ))}
      </ul>
    </>
  );
}

async function getStaticProps() {
  const articles = await sc.fetch(allArticles);

  return {
    props: {
      articles,
    },
  };
}

export default Articles;
export { getStaticProps };
