import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Bed, Bath } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { House } from "@/lib/houses";

interface HouseCardProps {
  house: House;
}

export function HouseCard({ house }: HouseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-slate-200 relative">
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
          {house.type}
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{house.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{house.subtitle}</p>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span>{house.surface} m²</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{house.bedrooms} ch.</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{house.bathrooms} sdb</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {house.description}
        </p>

        <div className="text-2xl font-bold text-primary">
          À partir de {formatPrice(house.price)}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/maisons/${house.slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            Voir les détails
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
