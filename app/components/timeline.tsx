interface TimelineItem {
    year: string
    title: string
    description: string
    emoji?: string
}

interface TimelineProps {
    items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-current opacity-20" />

            <div className="space-y-8">
                {items.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                        {/* Circle marker */}
                        <div className="relative z-10 flex-shrink-0">
                            <div className="w-8 h-8 rounded-full border-2 border-current bg-background flex items-center justify-center">
                                {item.emoji && (
                                    <span className="text-sm">{item.emoji}</span>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                            <div className="mb-1">
                                <span className="text-sm font-mono opacity-60">{item.year}</span>
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight mb-1">
                                {item.title}
                            </h3>
                            <p style={{ color: 'rgb(var(--muted-foreground))' }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

