"use client";

import { useState } from "react";
import { HouseCard } from "@/components/HouseCard";
import { Select } from "@/components/ui/select";
import { houses } from "@/lib/houses";
import type { Metadata } from "next";

export default function MaisonsPage() {
  const [filters, setFilters] = useState({
    type: "all",
    bedrooms: "all",
    surfaceMin: "0",
    surfaceMax: "1000",
  });

  const filteredHouses = houses.filter((house) => {
    const typeMatch = filters.type === "all" || house.type === filters.type;
    const bedroomsMatch =
      filters.bedrooms === "all" ||
      house.bedrooms === parseInt(filters.bedrooms);
    const surfaceMatch =
      house.surface >= parseInt(filters.surfaceMin) &&
      house.surface <= parseInt(filters.surfaceMax);

    return typeMatch && bedroomsMatch && surfaceMatch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos modèles de maisons
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Découvrez notre gamme complète de maisons préfabriquées
            norvégiennes. Chaque modèle peut être adapté à vos besoins et à
            votre terrain.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-lg font-semibold mb-4">Filtrer les modèles</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de maison
              </label>
              <Select
                value={filters.type}
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
              >
                <option value="all">Tous les types</option>
                <option value="plain-pied">Plain-pied</option>
                <option value="étage">À étage</option>
                <option value="chalet">Chalet</option>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de chambres
              </label>
              <Select
                value={filters.bedrooms}
                onChange={(e) =>
                  setFilters({ ...filters, bedrooms: e.target.value })
                }
              >
                <option value="all">Toutes</option>
                <option value="2">2 chambres</option>
                <option value="3">3 chambres</option>
                <option value="4">4 chambres</option>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Surface min (m²)
              </label>
              <Select
                value={filters.surfaceMin}
                onChange={(e) =>
                  setFilters({ ...filters, surfaceMin: e.target.value })
                }
              >
                <option value="0">Aucun minimum</option>
                <option value="80">80 m²</option>
                <option value="100">100 m²</option>
                <option value="120">120 m²</option>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Surface max (m²)
              </label>
              <Select
                value={filters.surfaceMax}
                onChange={(e) =>
                  setFilters({ ...filters, surfaceMax: e.target.value })
                }
              >
                <option value="1000">Aucun maximum</option>
                <option value="100">100 m²</option>
                <option value="120">120 m²</option>
                <option value="150">150 m²</option>
              </Select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-600 mb-6">
          {filteredHouses.length} modèle{filteredHouses.length > 1 ? "s" : ""}{" "}
          trouvé{filteredHouses.length > 1 ? "s" : ""}
        </p>

        {/* Houses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>

        {filteredHouses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Aucun modèle ne correspond à vos critères. Essayez de modifier vos
              filtres.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
