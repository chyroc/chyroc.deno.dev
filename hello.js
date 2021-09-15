addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("<title>Hi, Chyroc.</title><h1>Hi, Chyroc.</h1>", {
      status: 200,
      headers: {
        server: "deploy",
        "content-type": "text/html; charset=utf-8",
      },
    }),
  );
});
