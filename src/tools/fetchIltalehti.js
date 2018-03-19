import Parser from "rss-parser";

export default async () => {
  let parser = new Parser();
  let feed = await parser.parseURL("http://www.iltalehti.fi/rss/uutiset.xml");
  console.log(feed);

  return feed;
};
