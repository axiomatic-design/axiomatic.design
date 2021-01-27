const allArticles = `*[_type == "article"] {
    _id,
    title,
    introText,
    'date': _publishedAt,
    'slug': slug.current,
    'author': author-> {
        name,
        slug,
        image
    }
} | order(_publishedAt desc)`;

const articleBySlug = `*[_type == "article" && slug.current == $slug] {
    title,
    body,
    mainImage,
    'date': _publishedAt,
    'author': author-> {
        name,
        slug,
        image
    }
}[0]`;

export { allArticles, articleBySlug };
