"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectOption } from "@/types"

type Props = {
  selectLabel: string
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  groupLabel?: string
  placeholder?: string
}

export default function SelectControl({
  selectLabel,
  value,
  onValueChange,
  options,
  placeholder,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-medium">{selectLabel}</span>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-56 bg-white h-12 text-lg">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
