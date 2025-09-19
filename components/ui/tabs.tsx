

import * as React from "react"

type TabsProps = {
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
	className?: string
	children: React.ReactNode
}

export function Tabs({ defaultValue, value, onValueChange, className, children }: TabsProps) {
	const [internalValue, setInternalValue] = React.useState(defaultValue || "")
	const currentValue = value !== undefined ? value : internalValue
	const handleChange = (val: string) => {
		setInternalValue(val)
		onValueChange?.(val)
	}
	return (
		<div className={className}>
					{React.Children.map(children, (child) => {
						if (React.isValidElement(child) && child.type === TabsList) {
							return React.cloneElement(child, { value: currentValue, onValueChange: handleChange })
						}
						if (
							React.isValidElement(child) &&
							(child as React.ReactElement<any, any>).props.value === currentValue
						) {
							return child
						}
						return null
					})}
		</div>
	)
}

type TabsListProps = {
	children: React.ReactNode
	value?: string
	onValueChange?: (value: string) => void
	className?: string
}
export function TabsList({ children, value, onValueChange, className }: TabsListProps) {
	return (
		<div className={className}>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child) && child.type === TabsTrigger) {
					return React.cloneElement(child, {
						selected: child.props.value === value,
						onSelect: () => onValueChange?.(child.props.value),
					})
				}
				return child
			})}
		</div>
	)
}

type TabsTriggerProps = {
	value: string
	children: React.ReactNode
	selected?: boolean
	onSelect?: () => void
	className?: string
}
export function TabsTrigger({ value, children, selected, onSelect, className }: TabsTriggerProps) {
	return (
		<button
			type="button"
			className={className + (selected ? " aria-selected" : "")}
			aria-selected={selected}
			onClick={onSelect}
		>
			{children}
		</button>
	)
}

type TabsContentProps = {
	value: string
	children: React.ReactNode
	className?: string
}
export function TabsContent({ value, children, className }: TabsContentProps) {
	return <div className={className}>{children}</div>
}

