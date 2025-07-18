import { SitemapStream, streamToPromise, EnumChangefreq, } from "sitemap";
import { createWriteStream, existsSync, mkdirSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");
const hostname = "https://www.maxtron.ai";
const urls = [
    { url: "/", changefreq: EnumChangefreq.DAILY, priority: 1.0 },
    { url: "/industries", changefreq: EnumChangefreq.WEEKLY, priority: 0.9 },
    { url: "/case-studies", changefreq: EnumChangefreq.WEEKLY, priority: 0.9 },
    {
        url: "/case-study/Blockchain-Game-Development",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/AI-Calling-Tool",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/Good-Standing",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/ICCA",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/ECommerce-Marketing",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/Crypto-Project-Marketing",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/Gro8",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/Tawuniya",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/Blockchain-Based-EVoting-System",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/Token-Launch",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    {
        url: "/case-study/ULALO",
        changefreq: EnumChangefreq.MONTHLY,
        priority: 0.8,
    },
    { url: "/tokenization", changefreq: EnumChangefreq.MONTHLY, priority: 0.8 },
    { url: "/about", changefreq: EnumChangefreq.YEARLY, priority: 0.7 },
    { url: "/careers", changefreq: EnumChangefreq.MONTHLY, priority: 0.7 },
];
const publicDir = resolve(__dirname, "public");
// Ensure the public directory exists
if (!existsSync(publicDir)) {
    mkdirSync(publicDir);
}
const sitemapStream = new SitemapStream({ hostname });
const writeStream = createWriteStream(`${publicDir}/sitemap.xml`);
sitemapStream.pipe(writeStream);
urls.forEach((item) => sitemapStream.write(item));
sitemapStream.end();
streamToPromise(sitemapStream)
    .then((data) => console.log("Sitemap generated:", data.toString()))
    .catch((error) => {
    console.error("Error generating sitemap:", error);
});
writeStream.on("error", (err) => {
    console.error("Write stream error:", err);
});
sitemapStream.on("error", (err) => {
    console.error("Sitemap stream error:", err);
});
