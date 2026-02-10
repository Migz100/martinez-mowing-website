interface ImagePlaceholderProps {
  text: string
  height?: string
  className?: string
}

export default function ImagePlaceholder({
  text,
  height = 'h-64',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${height} ${className} image-placeholder-gradient rounded-lg flex items-center justify-center`}
    >
      <p className="text-white text-sm md:text-base font-medium text-center px-4">
        {text}
      </p>
    </div>
  )
}
