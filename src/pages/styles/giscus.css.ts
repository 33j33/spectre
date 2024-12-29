import css from '../../styles/giscus.css?raw';

export async function GET() {
  const res = new Response(css);

  res.headers.set('Content-Type', 'text/css');
  res.headers.set('Access-Control-Allow-Origin', '*');

  return res;
}