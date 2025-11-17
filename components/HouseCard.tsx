import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Bed, Bath } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { getHouseImage } from "@/lib/image-utils";
import type { House } from "@/lib/houses";

interface HouseCardProps {
  house: House;
}

export function HouseCard({ house }: HouseCardProps) {
  const imageData = getHouseImage(house.slug, house.name);

  return (
    <Card className="overflow-hidden hover-lift group">
      <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
        <Image
          src={imageData.src}
          alt={imageData.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium shadow-sm z-10 transition-all group-hover:bg-primary group-hover:text-white">
          {house.type}
        </div>
        {/* Gradient overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {house.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{house.subtitle}</p>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1 transition-transform group-hover:scale-110">
            <Home className="h-4 w-4 text-primary" />
            <span>{house.surface} m²</span>
          </div>
          <div className="flex items-center gap-1 transition-transform group-hover:scale-110">
            <Bed className="h-4 w-4 text-primary" />
            <span>{house.bedrooms} ch.</span>
          </div>
          <div className="flex items-center gap-1 transition-transform group-hover:scale-110">
            <Bath className="h-4 w-4 text-primary" />
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
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
            Voir les détails
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
