// import Parser from "rss-parser";
/* global RSSParser */
import "rss-parser/dist/rss-parser.min.js";
export default async () => {
  let parser = new RSSParser();
  let feed = await parser.parseURL("http://www.iltalehti.fi/rss/uutiset.xml");
  console.log(feed);

  return feed;
};
