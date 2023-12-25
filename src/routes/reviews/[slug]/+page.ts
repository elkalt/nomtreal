import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { reviews } from '$lib/review-info';
import showdown from 'showdown';

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(`/reviews-md/${params.slug}.md`);
  if (!response.ok) error(404, 'Not found');

  const text = await response.text();
  let converter = new showdown.Converter();
  let html = converter.makeHtml(text);

  let reviewInfo = reviews.find((review) => review.name.replace(/\s/g, '-').toLowerCase() === params.slug);

  return {
    info: reviewInfo,
    content: html
  };
};