interface MovieCardProps {
  title: string;
  poster: string;
}

export default function MovieCard({ title, poster }: MovieCardProps) {
  return (
    <div className="w-40">
      <img
        src={poster}
        alt={title}
        className="rounded-xl shadow-lg hover:scale-105 transition"
      />
      <p className="mt-2 text-sm font-medium line-clamp-1">{title}</p>
    </div>
  );
}
