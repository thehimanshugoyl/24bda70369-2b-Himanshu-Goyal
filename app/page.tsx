"use client"

import { useState } from "react"
import ProductCard from "../components/product-card"

import SelectControl from "@/components/select-control"

const products = [
  { id: 1, name: "Laptop", price: 1200, category: "electronics" },
  { id: 2, name: "Headphones", price: 200, category: "electronics" },
  { id: 3, name: "T-Shirt", price: 30, category: "clothing" },
  { id: 4, name: "Jacket", price: 120, category: "clothing" },
]

export default function Page() {
  const [filterCategory, setFilterCategory] = useState("all")
  const [sortBy, setSortBy] = useState("default")

  let filtered = [...products]

  if (filterCategory !== "all") {
    filtered = filtered.filter(p => p.category === filterCategory)
  }

  if (sortBy === "low") {
    filtered.sort((a, b) => a.price - b.price)
  }

  if (sortBy === "high") {
    filtered.sort((a, b) => b.price - a.price)
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex gap-6">
          <SelectControl
            selectLabel="Category"
            value={filterCategory}
            onValueChange={setFilterCategory}
            placeholder="All Products"
            options={[
              { value: "all", label: "All Products" },
              { value: "electronics", label: "Electronics" },
              { value: "clothing", label: "Clothing" },
            ]}
          />

          <SelectControl
            selectLabel="Sort"
            value={sortBy}
            onValueChange={setSortBy}
            placeholder="Default"
            options={[
              { value: "default", label: "Default" },
              { value: "low", label: "Price: Low to High" },
              { value: "high", label: "Price: High to Low" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  )
}
