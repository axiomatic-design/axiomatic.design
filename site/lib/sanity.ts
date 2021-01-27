import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sc = sanityClient({
  projectId: '6jrixiyj',
  dataset: 'production',
  useCdn: true,
});

const builder = imageUrlBuilder(sc);

const urlFor = (source) => builder.image(source);

export { sc, urlFor };
