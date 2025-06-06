export default {
    async fetch(request, env, context) {
      const { createRequestHandler } = await import('@shopify/hydrogen/entry-vercel');
      return createRequestHandler().fetch(request, env, context);
    },
  };
  