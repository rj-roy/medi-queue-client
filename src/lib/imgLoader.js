export default function imageLoader({ src, width, quality }) {
    if (src.startsWith("http")) {
        return `${src}?w=${width}&q=${quality || 75}`;
    }
    return src;
};