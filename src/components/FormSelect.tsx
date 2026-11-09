import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from './Icons'

type Option = { value: string; label: string }

type FormSelectProps = {
  name: string
  options: Option[]
  defaultValue?: string
  required?: boolean
  'aria-label'?: string
}

export default function FormSelect({
  name,
  options,
  defaultValue,
  required,
  'aria-label': ariaLabel,
}: FormSelectProps) {
  const listId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue ?? options[0]?.value ?? '')
  const selected = options.find((option) => option.value === value) ?? options[0]

  useEffect(() => {
    if (!open) return
    const onDoc = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`form-select${open ? ' is-open' : ''}`} ref={rootRef}>
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        className="form-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{selected?.label}</span>
        <ChevronDown />
      </button>
      {open ? (
        <ul className="form-select-menu" id={listId} role="listbox" aria-label={ariaLabel}>
          {options.map((option) => {
            const active = option.value === value
            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={`form-select-option${active ? ' is-active' : ''}`}
                  onClick={() => {
                    setValue(option.value)
                    setOpen(false)
                  }}
                >
                  {option.label}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
