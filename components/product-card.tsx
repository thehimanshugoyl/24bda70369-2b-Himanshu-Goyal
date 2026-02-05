import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Props = {
  name: string
  price: number
  category: string
}

export default function ProductCard({ name, price, category }: Props) {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="text-3xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <span className="text-xl font-semibold">${price.toFixed(2)}</span>
        <Badge variant={category === "clothing" ? "secondary" : "default"}>
          {category}
        </Badge>
      </CardContent>
    </Card>
  )
}
