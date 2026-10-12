// A component's props with className as a plain string (Base UI also accepts a function).
export type WithClass<T> = Omit<T, "className"> & { className?: string };
