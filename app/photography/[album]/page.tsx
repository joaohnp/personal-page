import Link from "next/link"
import Image from "next/image"

interface Props {
  params: { album: string }
}

export default function Album({ params }: Props) {
  // Generate placeholder photos for each album
  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=300&width=300&query=${params.album} photography ${i + 1}`,
    alt: `${params.album} photo ${i + 1}`,
  }))

  return (
    <div className="min-h-screen p-8">
      <div className="mb-8 max-w-6xl mx-auto">
        <Link href="/photography" className="hover:underline">
          ← back to photography
        </Link>
      </div>

      <h1 className="text-2xl mb-8 max-w-6xl mx-auto">{params.album}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div key={photo.id} className="aspect-square">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={300}
              height={300}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
