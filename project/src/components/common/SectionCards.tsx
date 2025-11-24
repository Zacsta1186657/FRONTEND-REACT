
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function SectionCards({ card, }: {
    card: {
        id: number,
        CardDescription: string,
        Amount: number,
        Trending: string,
        CardFooterUno: string,
        CardFooterDos: string,
    }[]
}) {
    return (
        <div className="">
            {
                card.map((cards) => (
                    <Card className="@container/card" key={cards.id}>
                        <CardHeader>
                            <CardDescription>{cards.CardDescription}</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                {cards.Amount}
                            </CardTitle>
                            <CardAction>
                                <Badge variant="outline">
                                    <TrendingUp />
                                    {cards.Trending}
                                </Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className="flex-col items-start gap-1.5 text-sm">
                            <div className="line-clamp-1 flex gap-2 font-medium">
                                {cards.CardFooterUno} <TrendingUp className="size-4" />
                            </div>
                            <div className="text-muted-foreground">
                                {cards.CardFooterDos}
                            </div>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}
